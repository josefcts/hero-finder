export interface ISearch {
  heroes?: any
  hero?: IHero
  isFetching: boolean
  term?: string
  lastUpdated: Date
  statusCode?: number
  offset: number
  limit: number
  count: number
  total: number
  error?: {
    message: string
    stack: string
  }
}

export interface Search {
  search: ISearch
}

export interface IHero {
  id: number
  name: string
  description: string
  thumbnail: any
  detailUrl: string
  wikiUrl: string
  comikLink: string
  urls?: object[] 
}

export const SEARCH_HERO_REQUEST = 'SEARCH_HERO_REQUEST'
export type SEARCH_HERO_REQUEST = typeof SEARCH_HERO_REQUEST
export const SEARCH_HERO_SUCCESS = 'SEARCH_HERO_SUCCESS'
export type SEARCH_HERO_SUCCESS = typeof SEARCH_HERO_SUCCESS
export const SEARCH_HERO_FAILURE = 'SEARCH_HERO_FAILURE'
export type SEARCH_HERO_FAILURE = typeof SEARCH_HERO_FAILURE


export const GET_HERO_REQUEST = 'GET_HERO_REQUEST'
export type GET_HERO_REQUEST = typeof GET_HERO_REQUEST
export const GET_HERO_SUCCESS = 'GET_HERO_SUCCESS'
export type GET_HERO_SUCCESS = typeof GET_HERO_SUCCESS
export const GET_HERO_FAILURE = 'GET_HERO_FAILURE'
export type GET_HERO_FAILURE = typeof GET_HERO_FAILURE
