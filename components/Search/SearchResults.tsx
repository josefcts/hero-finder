import React from 'react'
import { WithTranslation } from 'next-i18next'
import { connect, ConnectedProps } from 'react-redux'
import { Item, Loader, Container } from 'semantic-ui-react'

import { withTranslation } from '../../i18n'
import SearchHero from '../../presentational/SearchHero'
import { Search } from '../../store/search/types'
import SearchPagination from './SearchPagination'

const mapStateToProps = (state: Search) => ({
  isFetching: state.search.isFetching,
  heroes: state.search.heroes,
  term: state.search.term,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = WithTranslation & PropsFromRedux

const SearchResults = ({ heroes, isFetching, term, t }: Props) => {
  if (!term) {
    return <></>
  }

  return isFetching ? (
    <Container className="bg-white p-10 shadow-lg rounded-lg">
      <Loader active inline="centered" />
    </Container>
  ) : (
    <>
      <Container className="bg-white p-10 shadow-lg rounded-lg">
        <div className="mt-4">
          <Item.Group divided>
            {heroes && heroes.length ? (
              heroes.map((hero: any, index: number) => (
                <SearchHero key={index} {...hero} index={index} />
              ))
            ) : (
              <>
                <div className="text-center">
                  <p className="text-3xl">{t('ops')} </p>
                  <p className="text-2xl mt-4">{t('not-found')} </p>
                  <img className="mt-6" src="/img/layout/thor-sad.gif" />
                </div>
              </>
            )}
          </Item.Group>
        </div>
        <SearchPagination />
      </Container>
    </>
  )
}

export default withTranslation('search')(connect(mapStateToProps)(SearchResults))
