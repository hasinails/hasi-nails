import { getDictionary } from "@/dictionaries/dictionaries";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import { BaseLayoutProps } from "@/types/page";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "rc-slider/assets/index.css";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hasi Nails - nagelstudioludwigsburg",
  description: "Your hand and nails care INSTITUTE",
  keywords: [
    "nagelstudioludwigsburg",
    "nagelstudio",
    "nagelstudio ludwigsburg",
    "Hasi Nails",
    "nagelstudioludwigsburg.de",
    "nagelstudioludwigsburg de",
    "Nails ludwigsburg", 
    "Hasinails ludwigsburg", 
    "nagelstudio hasi" 
  ],
};

export default async function RootLayout({
  children,
  params,
}: BaseLayoutProps) {
  const dict = await getDictionary(params.lang);

  const navTitle = {
    home: dict.homepage.routing,
    pricing: dict.pricing.routing,
    about: dict.about.routing,
    contact: dict.contact.routing,
    gallery: dict.gallery.routing,
  } as const;

  return (
    <html lang="en" className={poppins.className}>
      <meta
        name="google-site-verification"
        content="kFKThH6XNah--9TAckva4XKzNAq9M7q4TyyOwFo9E70"
      />
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <ClientCommons />
        <SiteHeader navTitle={navTitle} />
        {children}
      </body>
    </html>
  );
}
