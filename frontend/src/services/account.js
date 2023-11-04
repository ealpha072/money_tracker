import axios from "axios";

const baseUrl = "http://localhost:5000/account"

const addAccount = async (data) => {
    const request = axios.post(`${baseUrl}/add`, data)
    const response = await request
    return response.data
}

const getAllAccounts = async (data) =>{
    const request = axios.post(`${baseUrl}/getAll`, data)
    const response = await request
    return response.data
}

const accountService = {addAccount, getAllAccounts}

export default accountService