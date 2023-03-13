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
    APIs: []
}

export default ExampleReducer