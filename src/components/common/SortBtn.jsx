export const SortBtn = ({ label, active }) => (
  <span className="flex items-center gap-0.5">
    <span className={active ? "text-blue-600 font-semibold" : "text-gray-500 font-medium"}>{label}</span>
    <svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M8 9l4-4 4 4M16 15l-4 4-4-4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);
