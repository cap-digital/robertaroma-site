import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const titulo = `${site.nome} ${site.numero} — ${site.cargo} pela ${site.uf}`;
const descricao = `${site.slogan}. ${site.chamada}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: titulo,
  description: descricao,
  keywords: [site.nome, site.cargo, site.uf, site.partido, site.numero, "Eleições 2026"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: titulo,
    description: descricao,
    siteName: site.nome,
    images: [{ url: "/img/roberta-oficial.png", width: 933, height: 1400, alt: site.nome }],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
    images: ["/img/roberta-oficial.png"],
  },
  // Os ícones vêm de app/icon.png e app/apple-icon.png (convenção do Next).
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E51A6E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
