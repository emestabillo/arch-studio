import type { Metadata } from "next";
import "./global.scss";
import Header from "@/components/Header/Header";
import { Navlinks } from "@/shared/Navlinks";
import Footer from "@/components/Footer/Footer";
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
        <Header links={Navlinks} />
        {children}
        <Footer links={Navlinks} />
      </body>
    </html>
  );
}
