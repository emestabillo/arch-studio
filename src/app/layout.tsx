import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./global.scss";
import Header from "@/components/layout/Header/Header";
import { navLinks } from "../components/layout/navlinks";
import Footer from "@/components/layout/Footer/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--ff-league-spartan",
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
      <body className={leagueSpartan.variable}>
        <Header links={navLinks} />
        {children}
        <Footer links={navLinks} />
      </body>
    </html>
  );
}
