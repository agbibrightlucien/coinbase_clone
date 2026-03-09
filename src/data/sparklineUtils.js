export function makePts(trend = 0, n = 50, seed = 1) {
  let v = 50;
  const pts = [];
  for (let i = 0; i < n; i++) {
    v += Math.sin(i * seed * 0.6) * 1.8 + (((seed * i * 9301 + 49297) % 233280) / 233280 - 0.5) * 5 + trend * 0.4;
    pts.push(Math.max(5, Math.min(95, v)));
  }
  return pts;
}

export function buildPath(pts, w, h) {
  const max = Math.max(...pts), min = Math.min(...pts), range = max - min || 1;
  return pts.map((v, i) => {
    const x = (i / (pts.length - 1)) * w;
    const y = h - ((v - min) / range) * (h - 6) - 3;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}
