import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers'
import rootSaga from '../sagas'

const rootReducers = combineReducers(reducers)

export const createStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    
    let store = configureStore({
        reducer: reducers,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    })

    sagaMiddleware.run(rootSaga);

    return store
}

export type RootState = ReturnType<typeof rootReducers>
