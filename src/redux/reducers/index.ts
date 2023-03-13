import ExampleReducer from './ExampleReducer'
import { customizedCreateReducer } from '../utils'

const reducers = {
    Example: customizedCreateReducer(ExampleReducer)
}

export default reducers