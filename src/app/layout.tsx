import "@/styles/globals.scss";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parle",
  description: "Leading Linguistic Service Provider You Can Trust",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"min-h-screen bg-background bg-[#f5f6fa] antialiased"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
