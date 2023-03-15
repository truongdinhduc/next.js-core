import { ReducerType } from './index.d'

const ExampleReducer:ReducerType = {
    initialState: {},
    actions: [
        {
            type: 'exampleAction',
            reducer: (state, action) => {
                console.log('Example action.')
            }
        }
    ],
    APIs: [
        {
            type: 'exampleCallAPIAction',
            reducer: (state, action) => {
                console.log('Example call API action.')
            }
        }
    ]
}

export default ExampleReducer