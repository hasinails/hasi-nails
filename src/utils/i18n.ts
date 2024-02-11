export const availableLocales = ['en-US', 'de-DE']
export const defaultLocale = 'en-US'
export const hasLocale = (pathname: string) => availableLocales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
)
export const isAvailableLocale = (locale: string) => availableLocales.includes(locale)
export const selectedLocate = () => {
    const locateKey = "hasi-locate";
    if (typeof window === "undefined") {
        return {
            locate: defaultLocale,
            setLocate: (locate: string) => {
                // do nothing
            }
        }
    }
    return {
        locate: localStorage.getItem(locateKey) || "en-US",
        setLocate: (locate: string) => {
            localStorage.setItem(locateKey, locate);
        }

    }
}