import React from 'react'
import { NextPageContext } from 'next'

import Layout from '../components/Layout'
import Home from '../components/Home'
import { fetchGetSearchHeroes } from '../store/search/actions'

const HomePage = () => (
  <Layout>
    <Home />
  </Layout>
)

HomePage.getInitialProps = async (ctx: NextPageContext) => {
  const { term, page } = ctx.query
  let offset = 1

  if (term && page) {
    offset = page === '1' ? 0 : (parseInt(page?.toString()) - 1) * 3

    await ctx.store.dispatch(fetchGetSearchHeroes(offset, term?.toString()))

    const { search } = ctx.store.getState()

    return {
      isFetching: search.isFetching,
      term: search.term,
      heroes: search.heroes,
      total: search.total,
    }
  }
  
  return {}
}

export default HomePage
