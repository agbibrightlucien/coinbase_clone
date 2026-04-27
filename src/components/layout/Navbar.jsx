import { Link } from 'react-router-dom';
import CoinLogo from "../../assets/coinbaseLogo.svg";

function Navbar() {
  return (
    <nav className="w-full border-b border-cb-border bg-white px-6 md:px-12 lg:px-40 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src={CoinLogo} alt="coinbase logo" className="w-[100px]" />
          </Link>
          
          <div className="hidden lg:flex gap-8 text-[14px] font-semibold text-cb-text">
            <Link to="/explore" className="hover:text-cb-blue transition-colors">Explore</Link>
            <Link to="/learn" className="hover:text-cb-blue transition-colors">Learn</Link>
            <a href="#" className="hover:text-cb-blue transition-colors">Individuals</a>
            <a href="#" className="hover:text-cb-blue transition-colors">Businesses</a>
            <a href="#" className="hover:text-cb-blue transition-colors">Developers</a>
            <a href="#" className="hover:text-cb-blue transition-colors">Company</a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/signin">
            <button className="text-cb-text hover:bg-cb-gray-bg px-4 py-2 rounded-full text-[14px] font-semibold transition-colors"> 
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-cb-blue hover:bg-cb-blue-hover text-white px-4 py-2 rounded-full text-[14px] font-semibold transition-colors"> 
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;