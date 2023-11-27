import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/transact"

export const transfer = createAsyncThunk(
    'account/transfer',
    async(data, thunkAPI) => {
        try{
            const response = await axios.post(`${baseUrl}/transfer`, data)
            return response.data
        }catch(error){
            return isRejectedWithValue(error.message)
        }
    }
)

export const getTransactions = createAsyncThunk(
    'account/getAll',
    async(data, thunkAPI) => {
        try{
            const response = await axios.post(`${baseUrl}/getAll`, data)
            return response.data
        }catch(error){
            return isRejectedWithValue(error.message)
        }
    }
)

export const transactionSlice = createSlice({
    name:'transactions',
    initialState:{
        transactions:[],
        isFetching:false,
        isSuccess:false,
        isError:false,
        errorMessage:'',
        successMessage: ''
    },
    reducers:{
        clearState: (state)=>{
            state.isFetching = false
            state.isError = false
            return state
        }, 
        clearErrorMessage: (state)=>{
            state.errorMessage=''
        }
    }
})