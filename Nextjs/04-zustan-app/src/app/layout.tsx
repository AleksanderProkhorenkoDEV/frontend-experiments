import type { Metadata } from "next";
import "./globals.css";
import { CounterStoreProvider } from "@/providers/counter-store-provider";

export const metadata: Metadata = {
  title: "Zustand Context",
  description: "App to make a context with Zustand package",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-300">
        <CounterStoreProvider>
          {children}
        </CounterStoreProvider>
      </body>
    </html>
  );
}
