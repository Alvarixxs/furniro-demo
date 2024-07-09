import Footer from "@/app/ui/_components/_footer/Footer";

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
