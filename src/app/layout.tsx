import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/Theme/ThemeProvider";
import { ReactNode } from "react";
import Navbar from "../components/Nav/NavBar";


export const metadata: Metadata = {
  title: "Kevin Rahul",
  description: "Kevin Rahul Portfolio",
};



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
