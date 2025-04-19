import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const font = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  // weight:[100, 200, 300, 400, 500, 600, 700, 800, 900]
});

export const metadata = {
  title: "Home | Mountain Coders",
  description: "Jump into the world of programming articles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Navbar /> */}

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
