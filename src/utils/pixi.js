import { Graphics } from 'pixi.js';

export function createCircle(x, y, radius, color = 0x000000, alpha = 1) {
  const r = new Graphics();
  r.circle(x, y, radius);
  r.fill(color);
  r.alpha = alpha;
  return r;
}

export function createRect(x, y, width, height, color = 0x000000, alpha = 1) {
  const r = new Graphics();
  r.rect(x, y, width, height);
  r.fill(color);
  r.alpha = alpha;
  return r;
}

export function createCross(
  x,
  y,
  size,
  color = 0xff0000,
  alpha = 1,
  thickeness = 1
) {
  const r = new Graphics();
  const s = size * 0.5;
  const t = thickeness * 0.5;
  r.rect(x - s, y - t, size, thickeness);
  r.rect(x - t, y - s, thickeness, size);
  r.fill(color);
  r.alpha = alpha;
  return r;
}

export default {
  createRect,
};
