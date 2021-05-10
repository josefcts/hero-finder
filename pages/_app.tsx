import React from 'react'
import App, { AppInitialProps, AppContext } from 'next/app'
import { i18n, appWithTranslation } from '../i18n'
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper'

import 'semantic-ui-css/semantic.min.css'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'tailwindcss/tailwind.css'

import '../styles/index.css'

import { wrapper } from '../store'

SwiperCore.use([Pagination, Autoplay, Navigation])
i18n.init({
  keySeparator: '..',
  nsSeparator: '::',
})

class WrappedApp extends App<AppInitialProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        appProp: ctx.pathname,
      },
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default wrapper.withRedux(appWithTranslation(WrappedApp))
