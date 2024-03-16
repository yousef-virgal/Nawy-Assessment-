import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nawy Assesment",
  description: "Nawy Assesment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
