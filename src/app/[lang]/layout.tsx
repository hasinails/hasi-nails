import { Poppins } from "next/font/google";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import { headers } from "next/headers";
import { hasLocale } from "@/utils/i18n";
import { BaseLayoutProps, BasePageProps } from "@/types/page";
import { getDictionary } from "@/dictionaries/dictionaries";
import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { routeMap } from "@/utils/routeMap";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'Hasi Nails',
  description: 'Your hand and nails care INSTITUTE',
}

export default async function RootLayout({
  children,
  params,
}: BaseLayoutProps) {
  const dict = await getDictionary(params.lang);

  const navTitle ={
    home: dict.homepage.routing,
    pricing: dict.pricing.routing,
    about: dict.about.routing,
    contact: dict.contact.routing,
    gallery: dict.gallery.routing
  } as const

  return (
    <html lang="en" className={poppins.className}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    <meta name="google-site-verification" content="kFKThH6XNah--9TAckva4XKzNAq9M7q4TyyOwFo9E70" />
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <ClientCommons />
        <SiteHeader navTitle={navTitle}/>
        {children}
        {/* <FooterNav navTitle={navTitle} /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
