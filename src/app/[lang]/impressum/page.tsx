import React from "react";
import { ContactMap } from "../contact/page";

export default function Page() {
    return (

        <div className="container">
            <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                IMPRESSUM
            </h2>
            <div >
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    Angaben gemäß § 5 TMG:
                </h3>
                <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    Sy Huy Ha
                    <br />
                    Körnerstraße 4<br />
                    71634 Ludwigsburg
                </span>
            </div>
            <div >
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    Kontakt:
                </h3>
                <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    <span>Telefon: 07141-3874937</span>
                    <br />
                    <span>
                        hs.supplies.info@gmail.com
                        <br />
                        hasi-nails.de
                    </span>
                </span>
            </div>

            <div >
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    Umsatzsteueridentifikationsnr.:DE293011281
                </h3>

            </div>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                Rechtsform: Einzelunternehmen
            </span>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                Vertreten durch den Geschäftsinhaber Sy Huy Ha
            </span>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Sy Huy Ha
            </span>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                Aufsichtsbehörde: www.bundesnetzagentur.de
            </span>
            <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                Mitgliedschaft in einer Kammer: IHK Stuttgart
            </span>
            <div className="mt-12">
                    <ContactMap />
            </div>
        
        </div>

    );
}
