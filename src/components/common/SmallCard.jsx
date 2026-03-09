import { Label } from "./Label";

export const SmallCard = ({ href, image, label, title }) => (
  <a href={href} className="group block rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-200 bg-white">
    {image && (
      <div className="aspect-[16/9] overflow-hidden bg-gray-50">
        <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
      </div>
    )}
    <div className="p-4">
      {label && <Label text={label} />}
      <h3 className="mt-1.5 text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#0052ff] transition-colors">{title}</h3>
    </div>
  </a>
);
