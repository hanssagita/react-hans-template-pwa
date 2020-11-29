import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import apiReducer from './reducers/api'

const rootReducer = combineReducers({
  apiReducer
})

const store = createStore(rootReducer, undefined, compose(applyMiddleware(thunk)))
export default store
