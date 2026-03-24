import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { SportProvider } from "@/context/SportContext";
import { ThemeProvider } from "@/context/ThemeContext";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ball Data - Sports Dashboard",
  description: "Live sports analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <SportProvider>{children}</SportProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
