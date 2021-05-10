import { Dispatch } from 'redux'

import {
  SEARCH_HERO_FAILURE,
  SEARCH_HERO_REQUEST,
  SEARCH_HERO_SUCCESS,
  GET_HERO_REQUEST,
  GET_HERO_FAILURE,
  GET_HERO_SUCCESS,
} from './types'
import { request, Request } from '../../utils/request'

export function requestSearchHeroes() {
  return {
    type: SEARCH_HERO_REQUEST,
    isFetching: true,
    lastUpdated: Date.now(),
  }
}

export function errorSearchHeroes(res: any) {
  return {
    type: SEARCH_HERO_FAILURE,
    isFetching: false,
    lastUpdated: Date.now(),
    statusCode: res.code,
    heroes: [],
    error: res,
  }
}

export function receiveSearchHeroes(response: any, term: string, page?: number) {
  return {
    type: SEARCH_HERO_SUCCESS,
    isFetching: false,
    lastUpdated: Date.now(),
    statusCode: response.code,
    heroes: response.data.results,
    hero: undefined,
    offset: response.data.offset,
    limit: response.data.limit,
    count: response.data.count,
    total: response.data.total,
    term,
    page
  }
}

export const fetchGetSearchHeroes = (
  offset: number,
  nameStartsWith?: string,
  name?: string,
  recall: boolean = true,
): any => (dispatch: Dispatch) => {
  const term = (nameStartsWith && nameStartsWith !== '') ? nameStartsWith : (name && name !== '') ? name : ''
  let params = ''
  params += `&orderBy=name&limit=3&offset=${offset}`
  params += name ? `&name=${name}` : ''
  params += nameStartsWith ? `&nameStartsWith=${nameStartsWith}` : ''
  
  return new Promise((resolve) => {
    dispatch(requestSearchHeroes())
    request('characters', params, {
      method: 'GET',
    })
      .then((res: Request) => {
        if (res.data.total === 0 && recall) {
          resolve(dispatch(fetchGetSearchHeroes(offset, undefined, nameStartsWith, false)))
        }
        resolve(dispatch(receiveSearchHeroes(res, term)))
      })
      .catch((err) => {
        resolve(dispatch(errorSearchHeroes(err)))
      })
  })
}

export function requestGetHero() {
  return {
    type: GET_HERO_REQUEST,
    isFetching: true,
    lastUpdated: Date.now(),
  }
}

export function errorGetHero(res: any) {
  return {
    type: GET_HERO_FAILURE,
    isFetching: false,
    lastUpdated: Date.now(),
    statusCode: res.code,
    error: res,
  }
}

export function receiveGetHero(response: any) {
  return {
    type: GET_HERO_SUCCESS,
    isFetching: false,
    lastUpdated: Date.now(),
    statusCode: response.code,
    hero: response.data.results[0],
    heroes: [],
    offset: response.data.offset,
    limit: response.data.limit,
    count: response.data.count,
    total: response.data.total,
  }
}

export const fetchGetHero = (id: string): any => (dispatch: Dispatch) => {
  return new Promise((resolve) => {
    dispatch(requestGetHero())
    request(`characters/${id}`, '', {
      method: 'GET',
    })
      .then((res: Request) => {
        if (res.error) {
          resolve(dispatch(errorGetHero(res)))
        } else {
          resolve(dispatch(receiveGetHero(res)))
        }
      })
      .catch((err) => {
        resolve(dispatch(errorGetHero(err)))
      })
  })
}