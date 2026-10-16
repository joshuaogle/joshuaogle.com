// Pure geometry for pencil drawings: construction lines, tapered strokes,
// hand-drawn arrows and loops. No DOM here, so it's unit-testable and reusable.

export type Point = [number, number]
export type Rand = () => number

const between = (rand: Rand, a: number, b: number) => a + rand() * (b - a)
const fmt = (n: number) => n.toFixed(1)

// A small deterministic random generator (mulberry32), for drawings that must repeat
export function seeded(seed: number): Rand {
  let s = seed | 0
  return () => {
    s = (s + 0x6D2B79F5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// A ruled construction line: slightly bowed, overshooting both ends like a drafter's line.
// Returns SVG path data (one quadratic segment).
export function ruledLine(x1: number, y1: number, x2: number, y2: number, { overshoot = 14, rand = Math.random as Rand } = {}): string {
  const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1
  const ux = dx / len, uy = dy / len
  const a: Point = [x1 - ux * overshoot * between(rand, .6, 1.1), y1 - uy * overshoot * between(rand, .6, 1.1)]
  const b: Point = [x2 + ux * overshoot * between(rand, .6, 1.1), y2 + uy * overshoot * between(rand, .6, 1.1)]
  const bow = between(rand, -.8, .8)
  const mid: Point = [(a[0] + b[0]) / 2 - uy * bow, (a[1] + b[1]) / 2 + ux * bow]
  return `M${fmt(a[0])} ${fmt(a[1])} Q${fmt(mid[0])} ${fmt(mid[1])} ${fmt(b[0])} ${fmt(b[1])}`
}

export function polyline(points: Point[]): string {
  return points.map((p, i) => (i ? 'L' : 'M') + fmt(p[0]) + ' ' + fmt(p[1])).join(' ')
}

// A filled pencil stroke along a centerline, its width varying with position (pressure).
// widthAt receives 0..1 along the line. Returns a closed SVG path.
export function taper(points: Point[], widthAt: (t: number) => number): string {
  const left: Point[] = [], right: Point[] = []
  points.forEach((p, i) => {
    const a = points[Math.max(0, i - 1)], b = points[Math.min(points.length - 1, i + 1)]
    let nx = -(b[1] - a[1]), ny = b[0] - a[0]
    const n = Math.hypot(nx, ny) || 1
    nx /= n; ny /= n
    const w = widthAt(points.length > 1 ? i / (points.length - 1) : 0) / 2
    left.push([p[0] + nx * w, p[1] + ny * w])
    right.push([p[0] - nx * w, p[1] - ny * w])
  })
  return `${polyline(left)} ${right.reverse().map(p => `L${fmt(p[0])} ${fmt(p[1])}`).join(' ')} Z`
}

export function cubic(p0: Point, c1: Point, c2: Point, p3: Point, steps: number): Point[] {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps, u = 1 - t
    return [
      u * u * u * p0[0] + 3 * u * u * t * c1[0] + 3 * u * t * t * c2[0] + t * t * t * p3[0],
      u * u * u * p0[1] + 3 * u * u * t * c1[1] + 3 * u * t * t * c2[1] + t * t * t * p3[1],
    ] as Point
  })
}

export type Arrow = { shaft: Point[], shaftOutline: string, head: Point[], headOutline: string }

// A hand-drawn arrow: the curve bulges early and relaxes into the target; the stroke is thin
// where the pencil lands, fuller through the middle and lifts at the tip; the head is one
// flick with uneven barbs. bend is the sideways bulge as a share of the length (+/-).
export function arrow(from: Point, to: Point, { bend = .2, weight = 2.1, rand = Math.random as Rand } = {}): Arrow {
  const [x1, y1] = from, [x2, y2] = to
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1
  const ux = dx / L, uy = dy / L, nx = -uy, ny = ux
  const c1: Point = [x1 + ux * L * .3 + nx * bend * L * .5 + between(rand, -2, 2), y1 + uy * L * .3 + ny * bend * L * .5 + between(rand, -2, 2)]
  const c2: Point = [x1 + ux * L * .78 + nx * bend * L * .14, y1 + uy * L * .78 + ny * bend * L * .14]
  const shaft = cubic([x1, y1], c1, c2, [x2, y2], 40)

  const angle = Math.atan2(y2 - c2[1], x2 - c2[0])
  const barb = (spread: number, length: number): Point => [x2 + Math.cos(angle + Math.PI - spread) * length, y2 + Math.sin(angle + Math.PI - spread) * length]
  const a = barb(between(rand, .42, .5), between(rand, 11, 13))
  const b = barb(-between(rand, .55, .66), between(rand, 7.5, 9))
  const head = [
    ...cubic(a, [(a[0] + x2) / 2, (a[1] + y2) / 2], [x2, y2], [x2, y2], 8),
    ...cubic([x2, y2], [x2, y2], [(b[0] + x2) / 2, (b[1] + y2) / 2], b, 8).slice(1),
  ]
  return {
    shaft,
    shaftOutline: taper(shaft, t => weight * (.3 + .75 * Math.sin(Math.PI * Math.min(1, Math.pow(t, .8) * 1.04)) + .12 * t)),
    head,
    headOutline: taper(head, t => weight * (.55 + .45 * Math.sin(Math.PI * t))),
  }
}

// A hand-drawn loop around a point: a little wobble, and it overshoots where it started
export function loop(cx: number, cy: number, rx: number, ry: number, { rand = Math.random as Rand } = {}): Point[] {
  const start = between(rand, -2.6, -2.0), turns = between(rand, 1.08, 1.15), steps = 70
  return Array.from({ length: steps + 1 }, (_, k) => {
    const t = start + (k / steps) * turns * Math.PI * 2
    const wobble = 1 + Math.sin(t * 3) * .03 + between(rand, -.008, .008), drift = (k / steps) * 5
    return [cx + Math.cos(t) * (rx + drift) * wobble, cy + Math.sin(t) * (ry + drift * .6) * wobble] as Point
  })
}
