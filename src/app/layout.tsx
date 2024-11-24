import type { Metadata } from "next";
import "./global.scss";
import Header from "@/components/layout/Header/Header";
import { navLinks } from "../components/layout/navlinks";
import Footer from "@/components/layout/Footer/Footer";
import localFont from "next/font/local";

const spartan = localFont({
  src: [
    {
      path: "../../public/fonts/Spartan-Medium.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Spartan-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--ff-spartan",
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
        <Header links={navLinks} />
        {children}
        <Footer links={navLinks} />
      </body>
    </html>
  );
}
