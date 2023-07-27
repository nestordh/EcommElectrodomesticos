import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'
import marketReducer from '../Features/Market/marketSlice'

export default configureStore({
    reducer: {
        counterReducer,
        marketReducer
    }
})