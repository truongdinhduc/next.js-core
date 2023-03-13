import { createAction, createReducer } from '@reduxjs/toolkit'
import { ReducerType } from '../reducers/index.d'

const customizedCreateReducer = (reducerObject:ReducerType) => {
    let initialState = reducerObject.initialState
    return createReducer(
        initialState,
        (builder) => {
            for (let action of reducerObject.actions){
                builder.addCase(createAction(action.type), action.reducer)
            }
        }
    )
}

export {
    customizedCreateReducer
}