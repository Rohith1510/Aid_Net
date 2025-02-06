import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aid Net",
  description:
    "A Decentralized Emergency Aid System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-slate-100 text-slate-700">
        
        <ThirdwebProvider>
        <Navbar/>
          {children}
          </ThirdwebProvider>
      </body>
    </html>
  );
}
