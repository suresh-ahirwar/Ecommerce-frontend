
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
function App() {
    return <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>

    </Routes>
    <Footer />
    </BrowserRouter>

    </div>;
}

export default App;
