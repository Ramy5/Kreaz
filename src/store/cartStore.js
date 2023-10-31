import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalAmount: 0,
  amount: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) existingProduct.amount += quantity;
      else state.products.push({ ...product, amount: quantity });

      state.totalAmount += quantity * product.price;
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productToRemove = state.products.find(
        (item) => item.id === productId
      );

      if (productToRemove) {
        state.totalAmount -= productToRemove.amount * productToRemove.price;
        state.products = state.products.filter((item) => item.id !== productId);
      }
    },

    clearCart: (state) => {
      state.products = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
