import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Dhiren Eye Care - Advanced Eye Hospital in Chennai",
  description: "Advanced Eye Care with Compassion and Precision. Specializing in Cataract, LASIK, Retina, and Glaucoma treatments in Chennai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-text-main`}>
        <Navbar />
        <main className="min-h-screen pt-[85px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
