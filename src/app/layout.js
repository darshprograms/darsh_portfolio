import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// src/app/layout.js

export const metadata = {
  title: 'Darsh Portfolio',
  description: 'Portfolio website using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
     <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

