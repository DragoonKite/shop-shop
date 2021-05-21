import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        categories: [],
        currentCategory: ''
    },
    reducers: {
        updateCategories: (state, action) => {
            return{
                ...state,
                categories: [...action.categories]
            };
        },
        updateCurrentCategory: (state, action) => {
            return{
                ...state,
                currentCategory: action.currentCategory
            };
        }
    }
})

export const { updateCategories, updateCurrentCategory } = categorySlice.actions

export default categorySlice.reducer