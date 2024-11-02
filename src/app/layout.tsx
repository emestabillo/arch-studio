import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "../styles/index.scss";

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--ff-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arch Studio",
  description: "Multi-page Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spartan.variable}`}>{children}</body>
    </html>
  );
}
