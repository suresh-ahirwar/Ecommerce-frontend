import { useSelector } from "react-redux"
import EmptyCart from "../assets/images/emptycart.png"
function Cart() {
    const cart = useSelector(state=>state.cart)
    return (
        <div>
         cart
        </div>
    )
}

export default Cart
