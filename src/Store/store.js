import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { shopApi } from '../Services/shopServices'
import { authApi } from '../Services/authServices'
import counterReducer from '../Features/Counter/counterSlice'
import marketReducer from '../Features/Market/marketSlice'
import cartReducer from '../Features/Cart/cartSlice'
import userReducer from '../Features/User/userSlice'
import orderReducer from "../Features/Order/orderSlice"


const store = configureStore({
    reducer: {
        counterReducer,
        marketReducer,
        cartReducer,
        userReducer,
        orderReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
         getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)

export default store