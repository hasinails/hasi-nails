import { NAIL_GALLERY } from '@/data/listings'
import React from 'react'
import GalleryGrid from '../GalleryGrid'
import { getDictionary } from '@/dictionaries/dictionaries'
import { BasePageProps } from '@/types/page'

export default async function Gallery({ params: { lang } }: BasePageProps) {
  const dict = await getDictionary(lang)
  return (
    <div>
      <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
        {dict.gallery.title}
      </h2>
      <div className="container grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <GalleryGrid />
      </div></div>
  )
}