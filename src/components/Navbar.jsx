import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal"
import Register from "./Register";
import Login from "./Login";
import { setSearchTerm } from "../redux/productSlice";
import { useDispatch } from "react-redux";
function Navbar() {
   const [ismodalopen,setisModalOpen] = useState(false)
   const [isLogin,setIsLogin] = useState(true)
   const [search,setSearch]  = useState()
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const openSignUp = () => {
      setIsLogin(false);
      setisModalOpen(true)
   }

   const openLogin = () => {
      setIsLogin(true);
      setisModalOpen(true)
   }

   const handleSearch = (e)=>{
   e.preventDefault()
   dispatch(setSearchTerm(search))
   navigate("/filter-data")
   }
     const products = useSelector(state=>state.cart.products)
    return (
        <nav className="bg-white shadow-md">
            <div className="container flex justify-between items-center px-4 py-4 md:p-x-16 lg:px-24">
                <div>
                   <Link to="/">e-SHOP</Link>
                </div>
                
                <div className="font-bold flex-1 mx-4">
                   <form className="relative flex-1" onSubmit={handleSearch}>
                        <input type="text" placeholder="Search Product" className="w-full  border border-gray-300 py-2 px-4" onChange={(e)=>{setSearch(e.target.value)}}/>
                        <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
                   </form>

                </div>
               
                <div className="flex items-center space-x-4">
                 <Link to="/cart" className="relative">
                 <FaShoppingCart className="text-lg"/>
                 {products.length > 0 && (
                    <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded full flex justify-center items-center text-white">{products.length}</span>
                 )}
                 </Link>
                 <button className="hidden md:block" onClick={() => setisModalOpen(true)}>
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

                <Link to="/shop"className="hover:underline">
                Shop
                </Link>

                <Link to="/"className="hover:underline">
                Contact 
                </Link>

                <Link to="/"className="hover:underline">
                About
                </Link>
            </div>
            <Modal ismodalopen={ismodalopen} setisModalOpen={setisModalOpen}>
               {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
            </Modal>
        </nav>
    )
}

export default Navbar;

