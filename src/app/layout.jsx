import { Tajawal } from "next/font/google";
import "./globals.css";

// Import the necessary elements
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import Footer from "@/components/Footer/Footer";
import CartIcon from "@/components/Cart/CartIcon";

const tajawal = Tajawal({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kreaz",
  description:
    "Explore a delectable world of sweets, cakes, tortas, and kahk at Kreaz Shop. Indulge in our handcrafted delights, perfect for every occasion. Discover quality treats to satisfy your sweet tooth and elevate your celebrations.",
  authors: [{ name: "Ramy" }, { name: "Kreaz" }],
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "kreaz",
    "sweet",
    "kahk",
    "cake",
    "shop",
    "كحك",
    "تورتة",
    "حلوي",
    "بسكويت",
  ],
  robots: {
    index: false,
    follow: true,
  },
  icons: {
    shortcut: "/logo.png",
    icon: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        {children}
        <CartIcon />
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
