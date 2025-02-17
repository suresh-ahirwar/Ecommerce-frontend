
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./components/Cart"
import Checkout from "./pages/Checkout";
import Order from "./pages/Order"
import { useState } from "react";
import FilterData from "./components/FilterData";
function App() {
  const [order,setOrder] = useState(null)
    return <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
      <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
      <Route path="/filter-data" element={<FilterData />}></Route>


      </Routes>
    <Footer />  
    </BrowserRouter>

    </div>;
}

export default App;
