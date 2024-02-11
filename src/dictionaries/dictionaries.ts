import 'server-only'
 
const dictionaries = {
  'en-US': () => import('./en.json').then((module) => module.default),
  'de-DE': () => import('./de.json').then((module) => module.default),
}
 export type DictionaryKeys = keyof typeof dictionaries
export const getDictionary = async (locale:DictionaryKeys) => dictionaries[locale]()