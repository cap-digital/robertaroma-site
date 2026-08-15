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

/**
 * Base das URLs absolutas de Open Graph. Precisa apontar para ESTE deploy —
 * se apontar para outro dominio, o og:image quebra nas previas do WhatsApp.
 */
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : site.url);

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: titulo,
  description: descricao,
  keywords: [site.nome, site.cargo, site.uf, site.partido, site.numero, "Eleições 2026"],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: titulo,
    description: descricao,
    siteName: site.nome,
    images: [{ url: "/img/og.png", width: 1200, height: 630, alt: titulo }],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descricao,
    images: ["/img/og.png"],
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
