import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { get } from "../Server/Axios";

export const fetchProducts = createAsyncThunk("shop/fetchProducts", async() => {
    const getData = await get('/products');
    return await getData.data;
});

const initialState = {
    products: [],
    currentBasketProcuts: localStorage.getItem("shopBasketItems") ? JSON.parse(localStorage.getItem("shopBasketItems")) : [],
    loadCurrentItem: [],
    totalPrice: '',
    totoalQty: '',
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers:{
        addToBasket(state,action) {
            const exist = state.currentBasketProcuts.findIndex(produc => produc.id === action.payload.id);

            if (exist >= 0) {
                state.currentBasketProcuts[exist].qty += 1;
            } else {
                state.currentBasketProcuts.push({...action.payload, qty: 1})
            }

            localStorage.setItem("shopBasketItems", JSON.stringify(state.currentBasketProcuts));
        },
        removeFromBasket(state,action) {
            const exist = state.currentBasketProcuts.findIndex(produc => produc.id === action.payload.id);

            if (state.currentBasketProcuts[exist].qty === 1) {
                state.currentBasketProcuts = state.currentBasketProcuts.filter(p => p.id !== action.payload.id);
            } else {
                state.currentBasketProcuts[exist].qty -= 1;
            }

            localStorage.setItem("shopBasketItems", JSON.stringify(state.currentBasketProcuts));
        },
        calcTotal(state,action) {
            let {total, quantity} = state.currentBasketProcuts.reduce((acc,current) => {
                const totalItemPrice = current.price * current.qty;

                acc.total += totalItemPrice;
                acc.quantity += current.qty;

                return acc;
            }, {
                total: 0,
                quantity: 0
            })
            // total = parseFloat(total.toFixed(2));
            state.totalPrice = total;
            state.totoalQty = quantity;
        },
    },
    extraReducers:{
        [fetchProducts.fulfilled]: (state,action) => {
            state.products = action.payload;
        }
    }
})

export const {
    addToBasket,
    removeFromBasket,
    calcTotal,
} = shopSlice.actions;

export default shopSlice.reducer;

// useSelector
export const allProducts = (state) => state.shop.products;
export const getCurrentProducts = (state) => state.shop.currentBasketProcuts;
export const getLoadCurrentItem = (state) => state.shop.loadCurrentItem;
export const getTotalPrice = (state) => state.shop.totalPrice;
export const getTotoalQty = (state) => state.shop.totoalQty;

// createSelector

// export const getProductsById = createSelector(
//     allProducts,
//     (state,itemId) => itemId,
//     (produc,itemId) => produc.filter(p => p.id === itemId )
// )