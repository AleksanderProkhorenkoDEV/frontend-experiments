import { montserrat } from "@/assets/Fonts";
import Header from "@/components/Header";
import '@/assets/css/global.css';

export const metadata = {
  title: "Mini Blog",
  description: "Created by Aleks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}