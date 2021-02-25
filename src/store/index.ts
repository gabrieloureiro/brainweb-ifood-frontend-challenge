import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './modules/rootReducer'

const configPersist = {
  key: 'ifood',
  storage
}

const persistedReducer = persistReducer(configPersist, rootReducer)

export const store = createStore(persistedReducer, composeWithDevTools())
export const persistor = persistStore(store)
