import { CaseReducer } from "@reduxjs/toolkit"

declare interface ActionType {
    type: string,
    reducer: CaseReducer
}

declare interface ReducerType {
    initialState: any,
    actions: ActionType[],
    APIs: ActionType[]
}

export {
    ActionType,
    ReducerType
}