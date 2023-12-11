"use client";

import React, { useState } from "react";
import useCartStore from "@/store/CartStore";
import Image from "next/image";
import Link from "next/link";
import { MdDelete } from "react-icons/md";

const ShoppingCart = () => {
  const {
    isOpen,
    toggleCart,
    cartItems,
    removeFromCart,
    // clearCart,
  } = useCartStore();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div
      className={`relative z-10 ${isOpen ? "block" : "hidden"}`}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      dir=""
    >
      <div
        className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        onClick={toggleCart}
      ></div>
      <div className="fixed inset-0 overflow-hidden animate_scale">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none custom_h fixed inset-y-0 right-0 flex max-w-full">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-mainColorLight"
                      id="slide-over-title"
                    >
                      مراجعة السلة{" "}
                    </h2>
                    <div className="flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-mainColorLight hover:text-mainColorDark"
                        onClick={toggleCart}
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItems.map((item) => (
                          <li key={item.id} className="flex py-6 gap-4">
                            <div className="h-24 w-24 flex justify-center items-center flex-shrink-0 overflow-hidden border border-gray-200">
                              {/* Replace the src attribute with your actual image source */}
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={80}
                                height={80}
                                className="object-cover object-center"
                              />
                            </div>

                            <div className="flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between gap-4 text-base font-medium text-gray-900">
                                  <h3 className="truncate w-24">
                                    <p className="truncate">{item.name}</p>
                                  </h3>
                                  <p className="ml-4">
                                    EGP {item.price.toFixed(2)}
                                  </p>
                                </div>
                                {/* <p className="mt-1 text-sm text-gray-500">
                                  Product description
                                </p> */}
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-mainColorLight">
                                  X {item.quantity}
                                </p>

                                <div className="flex flex-col gap-2 translate-x-4">
                                  <button
                                    type="button"
                                    onClick={() => removeFromCart(item.id)}
                                    className="font-medium flex items-center gap-1 text-mainColorLight hover:text-mainColorDark"
                                  >
                                    <span>إزالة من السلة</span> <MdDelete />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-mainColorLight px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-mainColorLight">
                    <p>الإجمالي</p>
                    <p>EGP {calculateTotal().toFixed(2)}</p>
                  </div>
                  {/* <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p> */}
                  <div className="mt-6">
                    <Link
                      href="/checkout"
                      onClick={toggleCart}
                      className="flex items-center justify-center rounded-md main_gradient--1 px-6 py-3 text-base font-medium text-white shadow-sm"
                    >
                      الإستمرار الي الدفع
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-mainColorLight">
                    <p>
                      <button
                        type="button"
                        onClick={toggleCart}
                        className="font-medium text-mainColorLight hover:text-mainColorDark"
                      >
                        الإستمرار في التسوق
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
