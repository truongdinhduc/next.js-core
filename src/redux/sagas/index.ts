import { all, takeLatest } from 'redux-saga/effects'
import APIs from '../../services/APIs'
import { exampleCallAnAPIAction, exampleSagaAction } from './ExampleSaga'

export default function* rootSaga() {
    yield all([
        // Example
        takeLatest('exampleSagaAction', exampleSagaAction),
        takeLatest('exampleCallAnAPIAction', exampleCallAnAPIAction, APIs.exampleAPI),
    ])
}