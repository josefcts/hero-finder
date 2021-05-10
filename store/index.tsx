import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, AnyAction, CombinedState } from 'redux'
import { MakeStore, createWrapper, HYDRATE } from 'next-redux-wrapper'

import { search } from './search/reducer'

const rootReducer = combineReducers({  search })

const isProduction = process.env.NODE_ENV === 'production'

const hydrateReducer = (state: CombinedState<any> = {}, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

const logMiddleware = createLogger({
  predicate: () => !isProduction
})

const middlewares = [logMiddleware, thunkMiddleware]

export const makeStore: MakeStore = () =>
  createStore(hydrateReducer, applyMiddleware(...middlewares))

export const wrapper = createWrapper(makeStore, { debug: !isProduction })
