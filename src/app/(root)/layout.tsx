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
  return children;
}
