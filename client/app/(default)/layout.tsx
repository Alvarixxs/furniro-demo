import type { Metadata } from "next";
import Header from "@/app/ui/_components/_header/Header";
import Footer from "@/app/ui/_components/_footer/Footer";

export const metadata: Metadata = {
  title: "Home",
}
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
