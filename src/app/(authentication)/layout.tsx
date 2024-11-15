import { Logo } from "#/components";
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
        px-5
        py-6
        sm:px-8
        lg:px-16
        xl:px-[120px]
        flex
        flex-col
        gap-y-8
      "
    >
      <header>
        <Logo />
      </header>
      {children}
    </main>
  );
}
