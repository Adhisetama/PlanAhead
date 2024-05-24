import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

import Sidebar from "../components/sidebar";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <GlobalStyleProvider>
            <Sidebar/>
            {children}
          </GlobalStyleProvider>
        </ContextProvider>
      </body>
    </html>
  )
}