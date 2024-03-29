"use client";

import { FaShoppingCart } from "react-icons/fa";
import ShoppingCart from "./ShoppingCart";
import useCartStore from "@/store/CartStore";

const CartIcon = () => {
  const { toggleCart, cartItems } = useCartStore();
  console.log("🚀 ~ file: CartIcon.jsx:9 ~ CartIcon ~ cartItems:", cartItems);

  return (
    <>
      <div
        onClick={toggleCart}
        className={`fixed bottom-7 left-7 z-40 ${"bg-mainColorLight"} hidden xl:block p-3 rounded-full cursor-pointer`}
      >
        <FaShoppingCart className="text-white text-2xl" />
      </div>

      <ShoppingCart />
    </>
  );
};
export default CartIcon;
