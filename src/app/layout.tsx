import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Tinos } from "next/font/google"; // Replace 'Savate' with a valid font name
import { Bitter as Lora } from "next/font/google";
import "./globals.css";
import { GameProvider } from "./GameContext";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

const roboto = Tinos({
   subsets: ["latin"],
   weight: ["400", "700"],
   variable: "--font-roboto",
});

const lora = Lora({
   subsets: ["latin"],
   weight: ["400", "700"],
   variable: "--font-lora",
});

export const metadata: Metadata = {
   title: "Mastermind",
   description: "A classic code-breaking game",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable} ${lora.variable}`}>
            <GameProvider>{children}</GameProvider>
         </body>
      </html>
   );
}
