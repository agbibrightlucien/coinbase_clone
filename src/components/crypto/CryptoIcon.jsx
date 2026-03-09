export function CryptoIcon({icon, color}){
    return(
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"style={{backgroundColor:color}}>
            {icon}
        </div>
    );
}
