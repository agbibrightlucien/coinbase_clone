export const DropBtn = ({ children, icon }) => (
  <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-800 font-medium hover:bg-gray-50 transition-colors">
    {icon && <span className="text-base">{icon}</span>}
    {children}
    <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);
