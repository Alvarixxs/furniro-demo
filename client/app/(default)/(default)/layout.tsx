import type { Metadata } from "next";
import Footer from "@/app/ui/_components/_footer/Footer";

export const metadata: Metadata = {
  title: "Home",
}
export default function Layout(
  {
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
