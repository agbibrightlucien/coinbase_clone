import { Label } from "./Label";

export const BigCard = ({ href, image, label, title, description }) => (
  <a href={href} className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200 bg-white">
    <div className="aspect-[16/9] overflow-hidden bg-gray-50">
      <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
    </div>
    <div className="p-5">
      {label && <Label text={label} />}
      <h2 className="mt-2 text-[1.1rem] font-semibold text-gray-900 leading-snug group-hover:text-[#0052ff] transition-colors">{title}</h2>
      {description && <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>}
    </div>
  </a>
);
