import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
