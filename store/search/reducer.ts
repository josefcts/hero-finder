import { AnyAction } from 'redux'

import {
  SEARCH_HERO_REQUEST,
  SEARCH_HERO_SUCCESS,
  SEARCH_HERO_FAILURE,
  GET_HERO_REQUEST,
  GET_HERO_FAILURE,
  GET_HERO_SUCCESS,
  ISearch,
} from './types'

const initialState: ISearch = {
  heroes: [],
  hero: undefined,
  isFetching: false,
  error: undefined,
  statusCode: undefined,
  lastUpdated: new Date(),
  offset: 0,
  limit: 0,
  count: 0,
  total: 0,
  term: '',
}

export const search = (state: ISearch = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEARCH_HERO_REQUEST:
    case GET_HERO_REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        lastUpdated: action.lastUpdated,
        term: action.term,
      })
    case SEARCH_HERO_FAILURE:
    case GET_HERO_FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        error: action.error,
        term: action.term,
      })
    case SEARCH_HERO_SUCCESS:
      return Object.assign({}, state, {
        lastUpdated: action.lastUpdated,
        isFetching: action.isFetching,
        statusCode: action.statusCode,
        offset: action.offset,
        limit: action.limit,
        count: action.count,
        total: action.total,
        heroes: action.heroes,
        term: action.term,
      })
    case GET_HERO_SUCCESS:
      return Object.assign({}, state, {
        lastUpdated: action.lastUpdated,
        isFetching: action.isFetching,
        statusCode: action.statusCode,
        offset: action.offset,
        limit: action.limit,
        count: action.count,
        total: action.total,
        hero: action.hero,
        term: action.term,
      })
    default:
      return state
  }
}
