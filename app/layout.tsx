import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Potion",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url:"/logo.svg",
        href:"/logo.svg"
      },   {
        media: "(prefers-color-scheme: dark)",
        url:"/logo.svg",
        href:"/logo.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider  
        attribute="class"
        defaultTheme="system" 
        disableTransitionOnChange
        storageKey="potion-theme-2">
          {children}
        </ThemeProvider>
       </body>
    </html>
  );
}
