import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "../styles/main.scss";
import Header from "@/components/Header/Header";
import { Navlinks } from "@/shared/Navlinks";

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
      <body className={`${spartan.variable}`}>
        <Header links={Navlinks} />
        {children}
      </body>
    </html>
  );
}
