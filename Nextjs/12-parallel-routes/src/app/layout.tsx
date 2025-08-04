import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Parallel and Intercepting routes",
  description: "Demo de Parallel e Intercepted Routes",
};

export default function RootLayout({
  children,
  post,
}: {
  children: React.ReactNode;
  post?: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {/* Navbar mejorada */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-gray-800">
                  NextDash
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-medium">AD</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Contenido principal con animación sutil */}
        <main className="max-w-8xl mx-auto px-6 py-8 animate-fadeIn">
          {children}
        </main>

        <div className="mt-6 w-1/2 m-auto">
          <div className="bg-white shadow rounded-lg overflow-hidden m-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Latest Posts
              </h2>
            </div>
            {post}
          </div>
        </div>
      </body>
    </html>
  );
}
