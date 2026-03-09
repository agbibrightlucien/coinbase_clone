import { ArrowRight } from "./Icons";

export const SeeMoreBtn = ({ href, label }) => (
  <div className="flex justify-center mt-8">
    <a href={href} className="inline-flex items-center gap-1 text-sm text-gray-600 font-medium hover:text-[#0052ff] transition-colors border border-gray-200 rounded-full px-5 py-2.5 hover:border-[#0052ff] hover:bg-blue-50 transition-all">
      {label} <ArrowRight />
    </a>
  </div>
);
