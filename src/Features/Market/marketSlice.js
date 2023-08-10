import { createSlice } from "@reduxjs/toolkit";
import Products from '../../Data/products.json'

export const marketSlice = createSlice({
    name: "Market",
    initialState: {
        value: {
            categorySelected: "",
            idSelected: "",
            allProducts: Products,
            productsSelected: [],
     } },
  
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.productsSelected = state.value.allProducts.filter(product => product.category === action.payload)
            state.value.categorySelected = action.payload
        },
        setIdSelected: (state,action) => {
            state.value.idSelected = action.payload
        }
    }
})

export const {setCategorySelected, setIdSelected } = marketSlice.actions
export default marketSlice.reducer


