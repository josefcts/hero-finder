const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  env: {
    marvelApiPublicKey: process.env.MARVEL_API_PUBLIC_KEY,
    marvelApiPrivateKey: process.env.MARVEL_API_PRIVATE_KEY,
    marvelApiUrl: process.env.MARVEL_API_URL,
  },
}
