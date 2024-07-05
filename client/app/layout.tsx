import type { Metadata } from "next";
import "./globals.css";
import {poppins} from "@/app/ui/fonts";
import Header from "@/app/ui/_components/_header/Header";
import Providers from "@/app/ui/_components/providers";

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
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
