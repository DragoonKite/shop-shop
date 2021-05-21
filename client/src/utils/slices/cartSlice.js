import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartOpen: false
    },
    reducers: {
        addToCart: (state, action) => {
            return{
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product]
            }; 
        },
        addMultipleToCart: (state, action) => {
            return{
                ...state,
                cart:[...state.cart, ...action.products]
            };
        },
        removeFromCart: (state, action) => {
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
            });

            return{
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };
        },
        updateCartQuantity(state, action){
            const { _id, purchaseQuantity } = action.payload;
            state.cartOpen = true;
            state.cart = state.cart.map(product => {
                if (_id === product._id) {
                    product.purchaseQuantity = purchaseQuantity;
                }
                return product;
            })
        },
        /* updateCartQuantity: (state, action) => {
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };
        }, */
        clearCart: state => {
            return {
                ...state, 
                cartOpen: false,
                cart: []
            };
        },
        toggleCart: state => {
                state.cartOpen =!state.cartOpen
        }
    }
})

export const { 
    addToCart, 
    addMultipleToCart, 
    removeFromCart, 
    updateCartQuantity, 
    clearCart, 
    toggleCart 
} = cartSlice.actions

export default cartSlice.reducer