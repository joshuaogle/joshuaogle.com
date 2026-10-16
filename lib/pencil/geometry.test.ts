import { describe, expect, it } from 'vitest'
import { arrow, loop, ruledLine, seeded, taper } from './geometry'

const numbers = (d: string) => (d.match(/-?\d+(\.\d+)?/g) ?? []).map(Number)

describe('seeded', () => {
  it('repeats the same sequence for the same seed', () => {
    const a = seeded(7), b = seeded(7)
    expect([a(), a(), a()]).toEqual([b(), b(), b()])
  })

  it('stays within [0, 1)', () => {
    const r = seeded(1)
    for (let i = 0; i < 500; i++) {
      const v = r()
      expect(v).toBeGreaterThanOrEqual(0)
      expect(v).toBeLessThan(1)
    }
  })
})

describe('ruledLine', () => {
  it('overshoots both ends like a drafter\'s line', () => {
    const [sx, sy, , , ex, ey] = numbers(ruledLine(100, 50, 300, 50, { overshoot: 14, rand: seeded(3) }))
    expect(sy).toBeCloseTo(50, 0)
    expect(ey).toBeCloseTo(50, 0)
    expect(100 - sx).toBeGreaterThanOrEqual(14 * 0.6 - 0.1)
    expect(100 - sx).toBeLessThanOrEqual(14 * 1.1 + 0.1)
    expect(ex - 300).toBeGreaterThanOrEqual(14 * 0.6 - 0.1)
    expect(ex - 300).toBeLessThanOrEqual(14 * 1.1 + 0.1)
  })

  it('is a single quadratic segment', () => {
    expect(ruledLine(0, 0, 0, 100)).toMatch(/^M[-\d. ]+ Q[-\d. ]+$/)
  })
})

describe('taper', () => {
  it('outlines a closed shape with a point on each side of every centerline point', () => {
    const outline = taper([[0, 0], [50, 0], [100, 0]], () => 4)
    expect(outline.endsWith('Z')).toBe(true)
    expect(numbers(outline)).toHaveLength(12)
  })

  it('offsets each side by half the width', () => {
    const ys = numbers(taper([[0, 0], [100, 0]], () => 4)).filter((_, i) => i % 2 === 1)
    expect(ys.map(Math.abs)).toEqual([2, 2, 2, 2])
  })
})

describe('arrow', () => {
  it('runs the shaft from the start to exactly the target', () => {
    const a = arrow([0, 0], [200, 100], { rand: seeded(5) })
    expect(a.shaft[0]).toEqual([0, 0])
    expect(a.shaft[a.shaft.length - 1][0]).toBeCloseTo(200, 6)
    expect(a.shaft[a.shaft.length - 1][1]).toBeCloseTo(100, 6)
  })

  it('draws the head through the tip, with uneven barbs', () => {
    const a = arrow([0, 0], [200, 0], { rand: seeded(9) })
    const tip = a.head.find(([x, y]) => Math.abs(x - 200) < 1e-6 && Math.abs(y) < 1e-6)
    expect(tip).toBeDefined()
    const first = a.head[0], last = a.head[a.head.length - 1]
    const len = (p: number[]) => Math.hypot(p[0] - 200, p[1])
    expect(Math.abs(len(first) - len(last))).toBeGreaterThan(1)
  })

  it('returns closed outlines for the shaft and head', () => {
    const a = arrow([0, 0], [120, 40])
    expect(a.shaftOutline.endsWith('Z')).toBe(true)
    expect(a.headOutline.endsWith('Z')).toBe(true)
  })
})

describe('loop', () => {
  it('goes a little past one full turn, like a hand closing a circle', () => {
    const pts = loop(0, 0, 50, 30, { rand: seeded(2) })
    let turned = 0
    for (let i = 1; i < pts.length; i++) {
      const a0 = Math.atan2(pts[i - 1][1], pts[i - 1][0]), a1 = Math.atan2(pts[i][1], pts[i][0])
      let d = a1 - a0
      if (d > Math.PI) d -= 2 * Math.PI
      if (d < -Math.PI) d += 2 * Math.PI
      turned += d
    }
    expect(turned).toBeGreaterThan(2 * Math.PI)
    expect(turned).toBeLessThan(2 * Math.PI * 1.25)
  })
})
