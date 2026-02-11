import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bladi Hub - La communauté des Marocains du monde",
  description: "Plateforme d'entraide, networking et services pour les Marocains d'Europe (MRE). Connectez-vous avec Youssef & Salma, vos assistants IA personnels.",
  keywords: ["MRE", "Marocains", "diaspora", "communauté", "entraide", "networking", "services"],
  authors: [{ name: "Bladi Hub" }],
  openGraph: {
    title: "Bladi Hub - La communauté des Marocains du monde",
    description: "Rejoignez la plus grande communauté MRE d'Europe",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
