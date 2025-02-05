import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container flex justify-between items-center px-4 py-4 md:p-x-16 lg:px-24">
                <div>
                   <Link to="/">e-SHOP</Link>
                </div>
                
                <div className="font-bold flex-1 mx-4">
                   <form className="relative flex-1">
                        <input type="text" placeholder="Search Product" className="w-full  border border-gray-300 py-2 px-4"/>
                        <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
                   </form>

                </div>
               
                <div className="flex items-center space-x-4">
                 <Link to="/cart">
                 <FaShoppingCart className="text-lg"/>
                 </Link>
                 <button className="hidden md:block">
                    Login/Register
                 </button>
                 <button className="block md:hidden">
                    <FaUser />
                 </button>
                </div>
            </div>

            <div className="flex justify-center items-center space-x-10 y-4 text-sm font-bold pb-2">
                <Link to="/"className="hover:underline">
                Home
                </Link>

                <Link to="/"className="hover:underline">
                Shop
                </Link>

                <Link to="/"className="hover:underline">
                Contact 
                </Link>

                <Link to="/"className="hover:underline">
                About
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;

