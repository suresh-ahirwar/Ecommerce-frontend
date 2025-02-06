import { FaStar } from "react-icons/fa";
function ProductCard({ product }) {
    return (
        <div className="bg-white p-4 shadow rounded relative border border-gray-300 transform transition-transform duration-300 hover:scale-105 ">
            <img
                src={product.image}
                alt=""
                className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
            </div>
            <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all">
                <span className="group-hover:hidden font-bold text-lg">+</span>
                <span className="hidden group-hover:block">Add to card</span>
            </div>
        </div>
    );
}
export default ProductCard;