import { applyMiddleware, createStore } from 'redux'
import rootReducer from './modules/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = []

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
export default store
