import React, { SyntheticEvent } from 'react'
import { WithTranslation } from 'next-i18next'
import { useDispatch } from 'react-redux'
import { connect, ConnectedProps } from 'react-redux'
import { Pagination } from 'semantic-ui-react'
import { useRouter } from 'next/router'

import { withTranslation } from '../../i18n'
import { Search } from '../../store/search/types'
import { fetchGetSearchHeroes } from '../../store/search/actions'

const mapStateToProps = (state: Search) => ({
  isFetching: state.search.isFetching,
  total: state.search.total,
  limit: state.search.limit,
  offset: state.search.offset,
  term: state.search.term,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = WithTranslation & PropsFromRedux

const SearchPagination = ({ total, limit, offset, isFetching, term }: Props) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const handlePageChange = async (e: SyntheticEvent, data: any) => {
    e.preventDefault()
    const activePage = data?.activePage
    const offsetFiltered = activePage === '1' ? 0 : (parseInt(activePage?.toString()) - 1) * 3

    dispatch(fetchGetSearchHeroes(offsetFiltered, term))

    router.push(
      {
        pathname: '/',
        query: {
          term: term,
          page: activePage,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return !isFetching && total > 0 ? (
    <div className="text-center mt-8">
      <Pagination
        size="mini"
        onPageChange={handlePageChange}
        activePage={offset === 0 ? 1 : Math.ceil(offset / limit) + 1}
        totalPages={Math.ceil(total / limit)}
      />
    </div>
  ) : (
    <div></div>
  )
}

export default withTranslation('search')(connect(mapStateToProps)(SearchPagination))
