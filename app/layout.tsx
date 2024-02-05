import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gurkha Task Manager",
  description: "Task Manager App For Gurkha Bullion/Watch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex mt-16">
          <div className="w-64 shrink-0 px-4 hidden md:block ">
            <Sidebar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
