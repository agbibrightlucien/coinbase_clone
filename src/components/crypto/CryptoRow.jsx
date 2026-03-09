import { CryptoIcon } from "./CryptoIcon";

export function CryptoRow({name, price, change, up, color, icon}){
    return(
        <div className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-2">
                <CryptoIcon  icon={icon} color={color} />
                <span className="text-white text-[30px] font-medium group-hover:text-blue-400 transition-colors py-2">{name}</span>
            </div>
            <div className="text-right">
                <div className="text-white text-lg font-medium text-base">
                    {price}
                </div>
                {up !==null ? (
                    <div className={`text-sm font-medium ${up ? "text-emerald-400" : "text-red-400"}`}>
                         {change}
                    </div>
                ):(
                    <div className="text-gray-500 text-sm">--</div>
                )}
            </div>
        </div>
    );
}
