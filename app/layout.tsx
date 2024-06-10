import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Layout/SideBar";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import 'react-toastify/dist/ReactToastify.css';
import NextSessionProvider from "./SessionProvider";

const inter = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BREFONS",
  description: "Program to Build Resilience for Food and Nutrition Security in the Horn of Africa (BREFONS)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextSessionProvider>
            {children}
          </NextSessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
