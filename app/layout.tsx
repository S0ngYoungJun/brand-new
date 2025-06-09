import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar"


const inter = Inter({ subsets: ["latin"] });
import ThemeProviderWrapper from "@/app/components/theme-provider"

export const metadata: Metadata = {
  title: "Songyoungjun Portfolio",
  description: "Songyoungjun Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProviderWrapper 
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        </ThemeProviderWrapper >
        </body>
    </html>
  );
}

