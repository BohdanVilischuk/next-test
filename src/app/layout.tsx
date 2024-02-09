import type { Metadata } from "next";
import { Providers } from './providers'
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import React, { ReactNode } from "react";
import { Divider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Test app",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header/>
            <Divider />
            {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}