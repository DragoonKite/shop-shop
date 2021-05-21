import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productSlice';
import categoryReducer from './slices/categorySlice';
import cartReducer from './slices/cartSlice';

export default configureStore({
    reducer: {
        products: productsReducer,
        categories: categoryReducer,
        cart: cartReducer
    }
})