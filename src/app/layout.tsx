import type { Metadata } from "next";
// 1. Importamos as fontes do pacote next/font/google
import { Telex, Italianno, Inter } from "next/font/google";
import "./globals.css";

// 2. Configuração da TELEX
const telex = Telex({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-telex", 
  display: "swap",
});

// 3. Configuração da ITALIANNO
const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italianno",
  display: "swap",
});

// 4. Configuração da INTER (Padrão)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RV Tributos",
  description: "", //!TODO: adicionar descrição de SEO.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${telex.variable} ${italianno.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}