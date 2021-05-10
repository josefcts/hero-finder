import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

const HeadComponent = ({ title }: Props) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Encontre aqui o seu herói favorito"></meta>
  </Head>
)

export default HeadComponent
