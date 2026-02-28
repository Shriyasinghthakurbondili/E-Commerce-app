import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    address:null 
};

const AddressSlice = createSlice({
    name:"address",
    initialState,
    reducers:{
       saveAddress:(state,action)=>{
        state.address = action.payload;
       }
    }
})
export const {saveAddress} = AddressSlice.actions;
export const selectAddress = (state) => state.address.address;
export default AddressSlice.reducer;