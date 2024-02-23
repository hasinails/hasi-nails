import React from 'react'
import { content } from './data'
import { ContactMap } from '../contact/page'


export default function Page() {

  return (
    <div className='container'>
      <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
        Datenschutz
      </h2>
      <div id='content' dangerouslySetInnerHTML={{
        __html: content
      }}></div>
      <div className="mt-12">
        <ContactMap />
      </div>
    </div>
  )
}
