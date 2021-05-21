import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        updateProducts: (state, action) => {
            return {
                ...state,
                products:[...action.products],
            }
        }
    }
})

export const { updateProducts } = productSlice.actions
export default productSlice.reducer