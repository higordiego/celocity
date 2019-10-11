import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'


import root from './root'

const middleware = [thunk]

if (process.env.REACT_APP_ENV === 'dev') {
    const { logger } = require(`redux-logger`)
    middleware.push(logger)
}


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, root)


export default () => {
    let store = createStore(
        persistedReducer,
        applyMiddleware(...middleware)
    )

    let persistor = persistStore(store)

    return { store, persistor }
}