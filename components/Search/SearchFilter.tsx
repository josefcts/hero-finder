import React, { useState, useEffect } from 'react'
import { WithTranslation } from 'next-i18next'
import { Input, Form } from 'semantic-ui-react'
import { connect, ConnectedProps, useDispatch } from 'react-redux'
import { useDebounce } from "use-debounce";
import { useRouter } from 'next/router'

import { withTranslation } from '../../i18n'
import { Search } from '../../store/search/types'
import { fetchGetSearchHeroes } from '../../store/search/actions'

const mapStateToProps = (state: Search) => ({
  isFetching: state.search.isFetching,
  term: state.search.term,
  heroes: state.search.heroes,
  total: state.search.total,
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
type SearchProps = WithTranslation & PropsFromRedux

const SearchFilter = ({ t }: SearchProps) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const initalText = "";

  const [text, setText] = useState(initalText);
  const [debouncedTerm] = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedTerm) {
      dispatch(fetchGetSearchHeroes(0, debouncedTerm, undefined))
      router.push(
        {
          pathname: '/',
          query: {
            term: debouncedTerm,
            page: 1,
          },
        },
        undefined,
        { shallow: true }
      )
    }
  }, [debouncedTerm]);

  return (
    <div className="text-center mb-8">
      <div className="mt-12 block text-white text-md font-bold mb-1">{t('text-search')}</div>
      <Form autoComplete="off">
        <Input
          autocomplete="chrome-off"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="h-16 flex-grow text-2lg"
          placeholder={t('spider-man')}
          required={false}
          name="search"
        />
      </Form>
    </div>
  )
}

export default withTranslation('homepage')(connect(mapStateToProps)(SearchFilter))
