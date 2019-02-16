// @flow
import I18n from 'node-polyglot'

export default function translateFunction(phrases: { [string]: { [string]: string } }, locale: string) {
  const i18n = new I18n({ phrases: phrases[locale] || phrases.en, locale })
  return (...args: Array<any>): string => {
    return i18n.t(...args)
  }
}
