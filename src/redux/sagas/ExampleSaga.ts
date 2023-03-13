import { AxiosResponse, AxiosError } from "axios";
import { call, put } from "redux-saga/effects";

function* exampleSagaAction(action: any) {
    try {
        yield console.log(`Example saga action: "${action.type}".`)
    } catch (error: Error | AxiosError | any) {}
}

function* exampleCallAnAPIAction(API: any, action: any) {
    const { payload } = action;
    try {
        yield call(API, payload)
    } catch (error: Error | AxiosError | any) {}
}

export {
    exampleSagaAction,
    exampleCallAnAPIAction
}