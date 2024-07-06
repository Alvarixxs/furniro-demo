export default function Layout({
                                 children,
                               }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="bg-scand-interior bg-no-repeat bg-center bg-cover flex items-center justify-evenly min-h-screen px-6">
      <div></div>
      <div className="rounded-xl px-3 py-6 md:p-10 flex flex-col gap-5 bg-sand">
        {children}
      </div>
    </main>
  );
}
