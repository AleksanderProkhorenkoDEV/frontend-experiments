import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "nextjs 14 with Next-auth",
  description: "App nextjs14 with authorization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
