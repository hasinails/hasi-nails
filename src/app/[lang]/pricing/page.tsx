import Image from 'next/image'
import React from 'react'
import PricingImg from 'public/pricing.png'
import { BasePageProps } from '@/types/page'
import { getDictionary } from '@/dictionaries/dictionaries'
export default async function Pricing({ params: { lang } }: BasePageProps) {
    const dict = await getDictionary(lang)

    return (
        <div>
            <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                {dict.pricing.title}
            </h2>
            <div className='container'>
                <Image src={PricingImg} alt="Pricing" width={1280} height={0}
                    className='max-w-[768px] mx-auto w-full h-auto'
                />
            </div></div>
    )
}
