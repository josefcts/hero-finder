import React from 'react'
import Head from '../presentational/Head'
import Footer from '../presentational/Footer'

type Props = {
  children: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'Hero Finder - Encontre seu herói' }: Props) => {
  return (
    <>
      <Head title={title} />
        <div className="bg flex flex-col min-h-screen">
          <div className="page">{children}</div>
          <Footer />
        </div>
        
    </>
  )
}

export default Layout
