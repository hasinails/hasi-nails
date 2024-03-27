import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { type NextRequest } from 'next/server'
import { availableLocales, defaultLocale, hasLocale } from './utils/i18n'

const excludedPaths = ['/_next', '/api', '/favicon.ico', '/robots.txt', '/sitemap.xml']

function getLocale(request: NextRequest) {
  const languages = new Negotiator({ headers: { 'accept-language': request.headers.get('accept-language') } as any }).languages()

  const matchedLocate = match(languages, availableLocales, defaultLocale)
  return matchedLocate
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl

  // Skip excluded paths
  if (excludedPaths.some((path) => pathname.startsWith(path))) return

  const pathnameHasLocale = hasLocale(pathname)
  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
}