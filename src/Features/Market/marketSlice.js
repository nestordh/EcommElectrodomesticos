import { createSlice } from "@reduxjs/toolkit";

/**
 * 
 */

export const marketSlice = createSlice({
    name: "Market",
    initialState: {
        value: {
            categorySelected: "",
            idSelected: "",
            allProducts: [],
            productsSelected: [],
            productSelected: [],
     } 
    },
  
    reducers: {
        setCategorySelected: (state, action) => {
            state.value.productsSelected = state.value.allProducts.filter(product => product.category === action.payload)
            state.value.categorySelected = action.payload
        },
                
        setIdSelected: (state, action) => {
            state.value.productSelected = state.value.allProducts.find((product) => product.id === action.payload)
            state.value.idSelected = action.payload;
        },
        
        setAllProducts: (state, action) => {
            state.value.allProducts = action.payload;
        },
    }
})

export const {setCategorySelected,
              setIdSelected,
              setAllProducts, 
             }
            = marketSlice.actions
            
export default marketSlice.reducer


