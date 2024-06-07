import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Template from "./template";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animate a template",
  description: "Generate a animate template",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col gap-4 items-center justify-center`}>
        <Template>
          <Header />
          {children}
        </Template>
      </body>
    </html>
  );
}
