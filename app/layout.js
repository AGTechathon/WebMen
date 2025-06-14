// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ruptrix",
  description: "Finance and Savings App",
};

// This file is a Server Component by default — allowed to use <html> and <body>
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Client Component can go here */}
        <ClerkProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}
