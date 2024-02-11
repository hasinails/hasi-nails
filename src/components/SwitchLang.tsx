'use client';
import { availableLocales, selectedLocate } from '@/utils/i18n';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import React from 'react'

export default function SwitchLang() {
    const locate = selectedLocate().locate;

    const changeLocate = (locate: string) => {
        if (availableLocales[0] === locate) {
            selectedLocate().setLocate(availableLocales[1]);
        }
        else {
            selectedLocate().setLocate(availableLocales[0]);
        }
        window.location.reload();
    }
    return (

        <div
            onClick={() => changeLocate(locate)}
            className={`group self-center h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 font-medium hover:text-opacity-100 focus:outline-none cursor-pointer`}
        >
            <GlobeAltIcon className="w-5 h-5 opacity-80" />
            <span className="mx-1">/</span>
            <span className="w-5 h-5 opacity-80 whitespace-nowrap" >{locate}</span>

        </div>

    )
}
