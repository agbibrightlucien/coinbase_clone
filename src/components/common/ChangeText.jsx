export const ChangeText = ({ value, size = "sm" }) => {
  const pos = value > 0, zero = value === 0;
  const color = zero ? "text-gray-500" : pos ? "text-emerald-600" : "text-red-500";
  const arrow = zero ? "" : pos ? "↗ " : "↘ ";
  return (
    <span className={`${color} font-medium text-${size}`}>
      {arrow}{Math.abs(value).toFixed(2)}%
    </span>
  );
};
