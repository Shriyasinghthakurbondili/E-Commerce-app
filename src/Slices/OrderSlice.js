import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    orders : [],
    total:0
};

const orderSlice = createSlice({
    name : "orders",
    initialState,
    reducers :{
        placeOrder : (state, action) =>{
            state.orders.push({
                id : Date.now(),
                items : action.payload.items,
                total : action.payload.total,
                status: "Placed"
            })
        }
    }
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;