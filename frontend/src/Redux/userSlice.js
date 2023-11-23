import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from 'axios'

const baseUrl = "http://localhost:5000/user"

export const signupUser = createAsyncThunk(
    'user/signup',
    async(data, thunkAPI) => {
        try{
            const response = await axios.post(`${baseUrl}/signup`, data)
            return response.data
            //console.log(response.data)
        }catch (err){
            return isRejectedWithValue(err.message)
        }
    }
)

// export const loginUser = createAsyncThunk(
//     'user/signup',
//     async(data, thunkAPI) => {
//         try{
//             const response = await axios.post(`${baseUrl}/signup`, data)
//             console.log(response.data)
//         }catch (err){
//             return isRejectedWithValue(err.message)
//         }
//     }
// )

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        userDetails:[],
        isFetching:false,
        isSuccess:false,
        isError:false,
        isLoggedIn:false,
        isRegistered:false,
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
    },
    extraReducers:{
        [signupUser.pending]: (state) =>{
            state.isFetching = true
        },
        [signupUser.rejected]: (state, {payload}) => {
            console.log(payload)
            state.isFetching = false
            state.isSuccess = false
            state.isError = true
            state.errorMessage = payload.error
        },
        [signupUser.fulfilled]: (state, {payload}) => {
            state.isFetching = false
            state.isSuccess = true
            if(payload.message && payload.message === "User registered successfully"){
                state.isRegistered = true
                state.successMessage = payload.message
            }else{
                state.isError = true
                state.errorMessage = payload.message
            }
            console.log(payload)
        }
    }
})

export const {clearErrorMessage, clearState} = userSlice.actions
export const userSelector = state => state.user