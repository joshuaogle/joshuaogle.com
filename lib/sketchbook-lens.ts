// Liquid glass lens: each sketchbook cover's arrow button redraws the part of the print
// under it, warped like a drop of glass. It redraws only while something on that card is
// moving (reveal, hover lift, band slide), then rests.
//
// Markup: the cover carries data-lens, its arrow button data-lens-button with a <canvas>
// inside, and the print's <img> data-lens-print (the eyebrow's logos are images too).

const REACH = 1.6                   // how far beyond the button's radius the lens gathers from
const BORDER = 5                    // the print's border width in CSS pixels; keep in step with the cover CSS
export const MIN_SHADE = 0.12
export const TARGET = 3.1           // a touch over 3:1 for rounding headroom
const FALLBACK_SHADE = '0.45'       // when the print can't be read (cross-origin without CORS)

// Accessible shade: find the brightest pixel under the arrow, then the least shade that brings it to 3:1 with white
const LIN = new Float32Array(256).map((_, i) => { const c = i / 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4 })
const lum = (r: number, g: number, b: number) => 0.2126 * LIN[Math.round(r)] + 0.7152 * LIN[Math.round(g)] + 0.0722 * LIN[Math.round(b)]
export const contrastWithWhite = (r: number, g: number, b: number) => 1.05 / (lum(r, g, b) + 0.05)

// The shade is the sketchbook's own cover color, so the glass reads as part of the cover
export function shadeFor(r: number, g: number, b: number, tint: number[]) {
  const ok = (a: number) => contrastWithWhite((1 - a) * r + a * tint[0], (1 - a) * g + a * tint[1], (1 - a) * b + a * tint[2]) >= TARGET
  if (ok(MIN_SHADE)) return MIN_SHADE
  let lo = MIN_SHADE, hi = 1
  for (let i = 0; i < 12; i++) { const m = (lo + hi) / 2; if (ok(m)) hi = m; else lo = m }
  return hi
}

const warp = (r: number) => 0.82 + 0.6 * r * r * r * r     // <1 magnifies the middle; >1 pulls the rim inward

export function initSketchbookLens(root: HTMLElement) {
  const tmp = document.createElement('canvas'), scratch = tmp.getContext('2d', { willReadFrequently: true })
  const parser = document.createElement('canvas').getContext('2d')
  if (!scratch || !parser) return () => {}
  const tctx = scratch, parse = parser

  const tints = new WeakMap<HTMLElement, number[]>(), unreadable = new WeakSet<HTMLElement>()
  function tintOf(card: HTMLElement, go: HTMLElement) {
    let t = tints.get(card)
    if (!t) {
      parse.fillStyle = '#000'
      parse.fillStyle = getComputedStyle(card).getPropertyValue('--bg-start').trim() || '#0e0c0b'
      const h = String(parse.fillStyle).slice(1)   // canvas normalizes any CSS color to #rrggbb
      t = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16))
      tints.set(card, t)
      go.style.setProperty('--tint', t.join(' '))
    }
    return t
  }

  function draw(card: HTMLElement) {
    const go = card.querySelector<HTMLElement>('[data-lens-button]'), cv = go?.querySelector('canvas'), img = card.querySelector<HTMLImageElement>('img[data-lens-print]')
    if (!go || !cv || !img || unreadable.has(card) || !img.complete || !img.naturalWidth) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const g = go.getBoundingClientRect(), ir = img.getBoundingClientRect()
    if (!g.width) return
    const R = g.width / 2, gx = g.left + R, gy = g.top + R, S = R * REACH
    const N = Math.ceil(2 * S * dpr), M = Math.round(2 * R * dpr)
    if (tmp.width !== N || tmp.height !== N) { tmp.width = N; tmp.height = N }   // resizing clears and reallocates; only do it when the size changes
    const ox = gx - S, oy = gy - S, k = dpr
    tctx.clearRect(0, 0, N, N)
    const bw = BORDER * (ir.width / (img.offsetWidth || ir.width))
    const cx = ir.left + bw, cy = ir.top + bw, cw = ir.width - 2 * bw, ch = ir.height - 2 * bw
    // object-fit: cover; object-position: left top
    const sc = Math.max(cw / img.naturalWidth, ch / img.naturalHeight)
    tctx.save(); tctx.beginPath(); tctx.rect((cx - ox) * k, (cy - oy) * k, cw * k, ch * k); tctx.clip()
    tctx.drawImage(img, (cx - ox) * k, (cy - oy) * k, img.naturalWidth * sc * k, img.naturalHeight * sc * k)
    tctx.restore()
    let src: Uint8ClampedArray
    try {
      src = tctx.getImageData(0, 0, N, N).data
    } catch {
      // A cross-origin print without CORS can't be read: fall back to a flat shade
      unreadable.add(card)
      go.style.setProperty('--shade', FALLBACK_SHADE)
      return
    }
    if (cv.width !== M) { cv.width = M; cv.height = M }
    const ctx = cv.getContext('2d')
    if (!ctx) return
    const out = ctx.createImageData(M, M), o = out.data
    const c = S * dpr, rad = R * dpr
    // Sample only the screenshot itself: points that would land on the print's border or the cover
    // are clamped to the nearest screenshot pixel, so the lens never picks up an edge
    // (inset a pixel and a half, so the soft anti-aliased edge of the clip is never sampled either)
    const lx = Math.max(0, (cx - ox) * k + 1.5), ly = Math.max(0, (cy - oy) * k + 1.5)
    const hx = Math.min(N - 1.001, (cx - ox + cw) * k - 2.5), hy = Math.min(N - 1.001, (cy - oy + ch) * k - 2.5)
    for (let y = 0; y < M; y++) for (let x = 0; x < M; x++) {
      const u = (x + 0.5) / M * 2 - 1, v = (y + 0.5) / M * 2 - 1, r = Math.hypot(u, v)
      const edge = (1 - r) * M / 2 + 0.5               // soft, anti-aliased rim
      if (edge <= 0) continue
      const f = warp(Math.min(r, 1))
      // bilinear sample so the bent rim stays smooth
      const fx = Math.min(hx, Math.max(lx, c + u * f * rad - 0.5)), fy = Math.min(hy, Math.max(ly, c + v * f * rad - 0.5))
      const x0 = fx | 0, y0 = fy | 0, ax = fx - x0, ay = fy - y0
      const i00 = (y0 * N + x0) * 4, i10 = i00 + 4, i01 = i00 + N * 4, i11 = i01 + 4, oi = (y * M + x) * 4
      for (let ch2 = 0; ch2 < 3; ch2++) {
        const top = src[i00 + ch2] * (1 - ax) + src[i10 + ch2] * ax, bot = src[i01 + ch2] * (1 - ax) + src[i11 + ch2] * ax
        o[oi + ch2] = top * (1 - ay) + bot * ay
      }
      o[oi + 3] = Math.min(1, edge) * 255
    }
    ctx.putImageData(out, 0, 0)
    // The arrow covers roughly the middle 55% of the button; its worst case is the brightest pixel there
    let best = -1, br = 0, bg = 0, bb = 0
    for (let y = 0; y < M; y++) for (let x = 0; x < M; x++) {
      const u = (x + 0.5) / M * 2 - 1, v = (y + 0.5) / M * 2 - 1
      if (u * u + v * v > 0.3) continue
      const i = (y * M + x) * 4, l = lum(o[i], o[i + 1], o[i + 2])
      if (l > best) { best = l; br = o[i]; bg = o[i + 1]; bb = o[i + 2] }
    }
    go.style.setProperty('--shade', shadeFor(br, bg, bb, tintOf(card, go)).toFixed(3))
  }

  let stopped = false
  const until = new WeakMap<HTMLElement, number>(), running = new WeakSet<HTMLElement>()
  function kick(card: HTMLElement, ms = 800) {
    until.set(card, Math.max(until.get(card) || 0, performance.now() + ms))
    if (running.has(card)) return
    running.add(card)
    const tick = () => {
      if (stopped) return
      draw(card)
      if (performance.now() < (until.get(card) ?? 0)) requestAnimationFrame(tick); else running.delete(card)
    }
    requestAnimationFrame(tick)
  }

  const listeners = new AbortController(), { signal } = listeners
  const cards = [...root.querySelectorAll<HTMLElement>('[data-lens]')]
  cards.forEach((card) => {
    ;['mouseenter', 'mouseleave', 'focus', 'blur', 'transitionrun'].forEach((ev) => card.addEventListener(ev, () => kick(card), { signal }))
    const img = card.querySelector<HTMLImageElement>('img[data-lens-print]')
    if (!img || img.complete) kick(card, 1500)
    else img.addEventListener('load', () => kick(card, 1500), { signal })
  })
  addEventListener('resize', () => cards.forEach((c) => kick(c, 100)), { signal })
  return () => { stopped = true; listeners.abort() }
}
