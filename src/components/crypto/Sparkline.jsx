import { buildPath } from "../../data/sparklineUtils";

export const Spark = ({ pts, color, w = 80, h = 32, filled = false }) => {
  const d = buildPath(pts, w, h);
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible", display: "block" }}>
      {filled && <path d={`${d} L${w},${h} L0,${h} Z`} fill={color} fillOpacity="0.1" />}
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
