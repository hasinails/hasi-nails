import Image from 'next/image'
import React, { ReactNode } from 'react'
import PricingImg from 'public/pricing.png'
import { BasePageProps } from '@/types/page'
import { getDictionary } from '@/dictionaries/dictionaries'

type PriceRowType = { title: ReactNode, price: string }
const PriceRow = ({ title, price }: PriceRowType) => {
    return (
        <div className='flex items-center justify-between flex-nowrap'>
            <span className='flex-shrink-0'>
                {title}
            </span>
            <span className='mx-[2rem] w-full border-b border-solid'>
            </span>
            <span className='flex-shrink-0'>
                {price}
            </span>
        </div>
    )
}

const FillUpPrices: PriceRowType[] = [
    {
        title: 'Shellack',
        price: '33 €'
    },
    {
        title: 'Pulver-Gel-System',
        price: '35 €'
    },
    {
        title: 'UV Gel flüssig',
        price: '40 €'
    },
    {
        title: 'Pink & White',
        price: '43 €'
    },
    {
        title: 'Glitzerfrench',
        price: '43 €'
    },
    {
        title: 'Zehenmodellage',
        price: '44 €'
    },
    {
        title: 'Maniküre',
        price: '20 €'
    },
    {
        title: 'Pediküre',
        price: '30 €'
    }
]

// 5 €
// Strasssteine
// ab 0,50 €
// Lackieren
// 7 €
// Nagelreparatur
// ab 5,- €
// Farbgel
// ab 10,- €
// Extra Wunsch
// ab 5,- €
const DesignPrices: PriceRowType[] = [{
    title: 'Nagelpiercing',
    price: '5 €'
},
{
    title: 'Strasssteine',
    price: 'ab 0,50 €'
},
{
    title: 'Lackieren',
    price: '7 €'
},
{
    title: 'Nagelreparatur',
    price: 'ab 5,- €'
},
{
    title: 'Farbgel',
    price: 'ab 10,- €'
},
{
    title: 'Extra Wunsch',
    price: 'ab 5,- €'

}]

export default async function Pricing({ params: { lang } }: BasePageProps) {
    const dict = await getDictionary(lang)

    return (
        <div>
            <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                {dict.pricing.title}
            </h2>
            <div className='container'>
                <div className='flex flex-col md:flex-row mx-auto gap-16'>

                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl'>Auffüllen</h3>
                        <ul className='flex flex-col'>
                            {FillUpPrices.map(({ price, title }, index) => (
                                <li>
                                    <PriceRow title={title} price={price} />
                                </li>))
                            }

                            <li className='mt-8'>
                                <PriceRow title={<span className='text-[#e25353]'>NEUMODELLAGE Extra</span>} price={"zzgl. 5,- €"} />
                            </li>
                            <li>
                                <PriceRow title={<div><span className='text-[#e25353]'>Extra Länge</span>
                                    <span className='block text-xs'>(o. nach 5. Woche)</span>
                                </div>} price={"ab 5,- €"} />
                            </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl'>Design</h3>
                        <ul className='flex flex-col'>
                            {DesignPrices.map(({ price, title }, index) => (
                                <li>
                                    <PriceRow title={title} price={price} />
                                </li>))
                            }
                        </ul>
                    </div>
                </div>
            </div></div>
    )
}
