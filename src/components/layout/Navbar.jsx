import CoinLogo from "../../assets/coinbaseLogo.svg"

function Navbar() {
    return (
        <nav className="w-full border-b border-gray-200 px-40 py-4">
            <div className="flex items-center gap-10">
                <img src={CoinLogo} alt="coinbase logo" className="w-[50px]"/>
                
                <div className="hidden md:flex gap-12 text-xl font-medium">
                    <a href="#">Cryptocurrencies</a>
                    <a href="#">Individuals</a>
                    <a href="#">Businesses</a>
                    <a href="#">Institutions</a>
                    <a href="#">Developers</a>
                    <a href="#">Company</a>
                </div>
            

            <div className="flex items-center gap-1.5 ml-auto">
                <button className="bg-gray-100 text-black px-6 py-3 rounded-full font-medium "> 
                    Sign In
                </button>

                <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium"> 
                    Sign Up
                </button>
            </div>
        </div>
        </nav>
    )
}


export default Navbar;