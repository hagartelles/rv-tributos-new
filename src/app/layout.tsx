import type { Metadata } from "next";
import { Telex, Italianno, Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const baseUrl = "https://www.rvtributos.com";

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
  metadataBase: new URL(baseUrl),
  title: {
    default: "RV Tributos | Inteligência e Planejamento Tributário",
    template: "%s | RV Tributos"
  },
  description: "Consultoria especializada em Recuperação de Créditos, Planejamento Tributário e Compliance. Transformamos o custo fiscal em lucro para sua empresa.",
  keywords: ["Planejamento Tributário", "Recuperação de Crédito", "Revisão Fiscal", "Compliance Tributário", "Advocacia Tributária", "Contabilidade Estratégica"],
  authors: [{ name: "RV Tributos" }],
  creator: "RV Tributos",
  publisher: "RV Tributos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Configuração para compartilhamento (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: "RV Tributos | Soluções Tributárias que Geram Lucro",
    description: "Pare de pagar mais impostos do que deve. Especialistas em reduzir sua carga tributária com segurança jurídica.",
    url: baseUrl,
    siteName: "RV Tributos",
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Crie esta imagem (1200x630px) e salve em /public
        width: 1200,
        height: 630,
        alt: 'RV Tributos - Consultoria Especializada',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
//!TODO: Substituir GTM-XXXXXX pelo ID real do Google Tag Manager
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${telex.variable} ${italianno.variable} ${inter.variable} antialiased`}>
        <SchemaMarkup />
        {children}
        <GoogleTagManager gtmId="GTM-XYZ123" /> 
      </body>
    </html>
  );
}