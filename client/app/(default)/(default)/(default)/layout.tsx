import type { Metadata } from "next";
import SubHeader from "@/app/ui/_components/_subHeader/SubHeader";
import SubFooter from "@/app/ui/_components/_subFooter/SubFooter";

export const metadata: Metadata = {
  title: "%s",
}
export default function Layout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SubHeader />
      {children}
      <SubFooter />
    </main>
  );
}
