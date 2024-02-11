import { availableLocales } from '@/utils/i18n'
import { usePathname, useRouter } from 'next/navigation'
import React, { useCallback } from 'react'

export default function useRouterI18n() {
    const router = useRouter()
    
    const pathname= usePathname()
    const getCurrentLang = useCallback(() => {
        const currentLang = availableLocales.find((locale) => pathname.startsWith(`/${locale}/`))
        return currentLang
    }, [])
    const push = useCallback((path: string) => {
        const currentLang = getCurrentLang()
        if (!currentLang) return path
        const i18nPath = `/${currentLang}${path}`
        router.push(i18nPath as any)
        return i18nPath
    }, [router])
  return {
    push,
  }
}
