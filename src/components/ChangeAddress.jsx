import { useState } from "react";

function ChangeAddress({setAddress,setisModalOpen}) {
    const [newAddress,setNewAddress] = useState("");
    const close = () =>{
        setAddress(newAddress);
        setisModalOpen(false);
    }
    return (
        <div>
            <h2 className="fontsemi-bold mb-3 text-xl">Change Shipping Address</h2>
            <input
                type="text"
                placeholder="Enter New Address"
                className="border-1 border-gray-500 shadow-md p-2 w-full mb-4" onChange={(e) =>setNewAddress(e.target.value)}
            />
            <div className="flex justify-end">
                <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={() => setisModalOpen(false)}>
                    Cancel
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={close}>
                    Save Address
                </button>
            </div>
        </div>
    );
}

export default ChangeAddress;
