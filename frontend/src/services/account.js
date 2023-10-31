import axios from "axios";

const baseUrl = "http://localhost:5000/account"

const addAccount = async (data) => {
    const request = axios.post(`${baseUrl}/add`, data)
    const response = await request
    return response.data
}

const editAccount = async (data) => {
    return data;
}

const accountService = {addAccount, editAccount}

export default accountService