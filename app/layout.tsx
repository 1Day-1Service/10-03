import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--font-cinzel"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "🔮 오늘의 타로 운세 | Daily Tarot Reading",
  description: "매일 하나의 타로 카드로 오늘의 운세를 확인하세요",
  keywords: ["타로", "운세", "타로카드", "점술", "오늘의 운세"],
  verification: {
    google: "4fH6k9IRd0AGqHAYAvpCe_EN_NwmRCpFso5olHqs_MA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

