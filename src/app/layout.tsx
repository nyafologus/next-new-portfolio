import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const monoFont = localFont({
  src: "../../public/operator-mono-medium.woff",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sophie FE Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`cursor-default text-center text-base font-normal leading-6 text-gray-800 antialiased ${monoFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
