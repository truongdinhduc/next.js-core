import { createAction, createReducer } from '@reduxjs/toolkit'
import { ReducerType } from '../reducers/index.d'

const customizedCreateReducer = (reducerObject:ReducerType) => {
    let initialState = reducerObject.initialState
    return createReducer(
        initialState,
        (builder) => {
            // normal actions
            for (let action of reducerObject.actions){
                builder.addCase(createAction(action.type), action.reducer)
            }
            // call API actions
            for (let action of reducerObject.APIs){
                builder.addCase(createAction(action.type), action.reducer)
            }
        }
    )
}

export {
    customizedCreateReducer
}