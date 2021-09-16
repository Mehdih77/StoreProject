import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../Server/Axios";

export const fetchProducts = createAsyncThunk("shop/fetchProducts", async() => {
    const getData = await get('/products');
    return await getData.data;
});

const initialState = {
    products: [],
    currentProcuts: localStorage.getItem("shopBasketItems") ? JSON.parse(localStorage.getItem("shopBasketItems")) : [],
    totalPrice: '',
    totoalQty: '',
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers:{
        addToBasket(state,action) {
            const exist = state.currentProcuts.findIndex(produc => produc.id === action.payload.id);

            if (exist >= 0) {
                state.currentProcuts[exist].qty += 1;
            } else {
                state.currentProcuts.push({...action.payload, qty: 1})
            }

            localStorage.setItem("shopBasketItems", JSON.stringify(state.currentProcuts));
        },
        removeFromBasket(state,action) {
            const exist = state.currentProcuts.findIndex(produc => produc.id === action.payload.id);

            if (state.currentProcuts[exist].qty === 1) {
                state.currentProcuts = state.currentProcuts.filter(p => p.id !== action.payload.id);
            } else {
                state.currentProcuts[exist].qty -= 1;
            }

            localStorage.setItem("shopBasketItems", JSON.stringify(state.currentProcuts));
        },
        calcTotal(state,action) {
            let {total, quantity} = state.currentProcuts.reduce((acc,current) => {
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
export const getCurrentProducts = state => state.shop.currentProcuts;
export const getTotalPrice = state => state.shop.totalPrice;
export const getTotoalQty = state => state.shop.totoalQty;

// get Products By Filtering Category
// export const getSuperMarkets = AllProducts.filter(s => s.category === 'supermarket');
// export const getOffers = AllProducts.filter(o => o.category === 'offers');
// export const getPhones = allProducts.filter(p => p.category === 'phone');