
import { Inter } from "next/font/google";
// import "./globals.css";


import Header from "@/app/portfolio/project1/components/Header"
import Footer from "@/app/portfolio/project1/components/Footer"

const inter = Inter({ subsets: ["latin"] });


export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className}>
        <Header />
        <div className="max-w-6xl mx-auto p-8 mt-[5rem] ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
