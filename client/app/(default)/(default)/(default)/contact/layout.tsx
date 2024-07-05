import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Contact | Furniro",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}