import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quatity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find(
                (item) => item.id === newItem.id
            );
            if (itemIndex) {
                itemIndex.quatity++;
                itemIndex.totalPrice += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quatity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image,
                });
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
