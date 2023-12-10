"use client";

import { Tajawal } from "next/font/google";

// Import the necessary elements
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling

const tajawal = Tajawal({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const layout = ({ children }) => {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
};

export default layout;
