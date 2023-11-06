import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
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
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) existingProduct.amount += quantity;
      else state.cartItems.push({ ...product, amount: quantity });

      state.totalAmount += quantity * product.price;
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productToRemove = state.cartItems.find(
        (item) => item.id === productId
      );

      if (productToRemove) {
        state.totalAmount -= productToRemove.amount * productToRemove.price;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== productId
        );
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
