import type { Metadata } from "next";
 import "./globals.css";
import {poppins} from "@/app/ui/fonts";
import Header from "@/app/ui/_components/_header/Header";

export const metadata: Metadata = {
  title: {
    template: '%s | Furniro',
    default: 'Furniro',
  },
  description: "Ecommerce website for furniture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
      {children}
      </body>
    </html>
  );
}
