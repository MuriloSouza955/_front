import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from 'next/link'
import Footer from "./components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Controller Solar",
  description: "Controller Solar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={'p-5 flex justify-between'}>
          <a href="/">
            <Image
              src="/controller-solar-logo.svg"
              width={200}
              height={40}
              alt="Logo Controller Solar"
            />
          </a>
          <Link href="/">Entrar</Link>
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
