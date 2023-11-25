import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/account"

export const addAccount = createAsyncThunk(
    'account/add',
    async(data, thunkAPI) => {
        try{
            const response = await axios.post(`${baseUrl}/add`, data)
            return response.data
        }catch(error){
            return isRejectedWithValue(error.message)
        }
    }
)

export const getAllAccounts = createAsyncThunk(
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