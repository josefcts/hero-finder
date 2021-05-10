const path = require('path')
const NextI18Next = require('next-i18next').default

let localeSubpaths = {}
if (process.env.NODE_ENV !== 'test') {
  const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
}

module.exports = new NextI18Next({
  defaultLanguage: 'br',
  otherLanguages: ['en'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'querystring', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie'],
  },
})
