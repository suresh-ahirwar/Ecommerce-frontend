import { useSelector } from "react-redux";
import EmptyCart from "../assets/images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
import ChangeAddress from "./ChangeAddress";
import { decreaseQuantity, increaseQuantity, removeCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
function Cart() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart);
    const [address, setAddress] = useState("main street, 0012");
    const [ismodalopen,setisModalOpen] = useState(false)
    return (
        <div className="container mx-auto py-8 min-h-96 px-4 md:px-15 lg:px-24">
            {cart.products.length > 0 ? (
                <div>
                    <h3 className="text-2xl font-semibold mb-4">
                        SHOPPING CART
                    </h3>
                    <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                        <div className="md:w-2/3">
                            <div className="flex justify-between  items-center mb-4 text-xs ">
                                <p className="font-bold">PRODUCTS</p>
                                <div className="flex space-x-8 font-bold">
                                    <p>PRICE</p>
                                    <p>QUANTITY</p>
                                    <p>SUBTOTAL</p>
                                    <p>REMOVE</p>
                                </div>
                            </div>
                            <div>
                                {cart.products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-center justify-between p-3 border-1 border-gray-300 md:shadow"
                                    >
                                        <div className="md:flex items-center space-x-4">
                                            <img
                                                src={product.image}
                                                alt=""
                                                className="w-16 h-16 object-contain rounded"
                                            />
                                            <div className="flex-1 ml-4">
                                                <h3 className="text-lg font-semibold">
                                                    {product.name}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="flex space-x-12 items-center">
                                            <p>${product.price}</p>
                                            <div className="flex items-center justify-center border border-gray-300 md:shodow">
                                                <button className="text-xl font-bold px-1.5 border-r border-gray-300" onClick={()=>dispatch(decreaseQuantity(product.id))}>
                                                    -
                                                </button>
                                                <p className="text-xl px-2">
                                                    {product.quantity}
                                                </p>
                                                <button className="text-xl px-1 border-l border-gray-300" onClick={()=>dispatch(increaseQuantity(product.id))}>
                                                    +
                                                </button>
                                            </div>
                                            <p>
                                                $
                                                {(
                                                    product.quantity *
                                                    product.price
                                                ).toFixed(2)}
                                            </p>
                                            <button className="text-red-500 hover:text-red-700" onClick={() => dispatch(removeCart(product.id))}>
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                                <h3 className="text-sm font-semibold mb-5">CART TOTALS</h3>
                                <div className="flex justify-between mb-5 border-b  border-gray-300 pb-1">
                                    <span className="text-sm">TOTAL ITEMS:</span>
                                    <span>{cart.totalQuantity}</span>
                                </div>
                                <div className="mb-4 border-b border-gray-300 pb-2">
                                    <p>shipping:</p>
                                    <span className="ml-2">shipping to:</span> 
                                    <span className="text-xs font-bold">{address}</span> <br />
                                    <button className="text-blue-500 hover:underline mt-1 ml-2" onClick={()=>setisModalOpen(true)}>Change Address</button>
                                </div>

                                <div className="flex justify-between mb-4">
                                    <span>Total price:</span>
                                    <span>${cart.totalPrice.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-red-600 text-white py-2 hover:bg-red-8 rounded-[5px]">Proceed To Chekcout</button>
                            </div>
                    </div>
                    <Modal ismodalopen={ismodalopen} setisModalOpen={setisModalOpen}>
                        <ChangeAddress setAddress={setAddress} setisModalOpen={setisModalOpen}/>
                    </Modal>
                </div>
            ) : (
                <div className="flex justify-center">
                    <img src={EmptyCart} alt="" className="h-96" />
                </div>
            )}
        </div>
    );
}

export default Cart;
