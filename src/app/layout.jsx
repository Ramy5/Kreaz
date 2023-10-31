import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kreaz",
  description: "Buy sweet, kahk, biscuit, and more from kreaz site",
  icons: {
    shortcut: "/logo.png",
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
