import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container flex justify-between items-center px-4 py-4 md:p-x-16 lg:px-24">
                <div>
                   <Link to="/">e-SHOP</Link>
                </div>
                
                <div className="font-bold text-lg mx-4">
                   <form className="relative flex-1">
                        <input type="text" placeholder="Search Product" className="w-full border py-2 px-4"/>
                        <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
                   </form>

                </div>
               
                <div>
                 <Link to="/cart">
                 <FaShoppingCart />
                 </Link>
                 <button>
                    Login/Register
                 </button>
                 <button>
                    <FaUser />
                 </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

