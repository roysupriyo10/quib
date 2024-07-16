import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "quib",
  description:
    "Create a face for your product before launching it into the market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className="
        bg-yellow-50
        min-h-screen
        xl:py-20
        xl:px-[120px]
        flex
        flex-col
        gap-y-8
      "
    >
      <header>
        <h1>Logo</h1>
      </header>
      {children}
    </main>
  );
}
