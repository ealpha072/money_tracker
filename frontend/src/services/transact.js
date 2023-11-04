import axios from "axios";

const baseUrl = "http://localhost:5000/transact"

const transfer = async (data) => {
    const request = axios.post(`${baseUrl}/transfer`, data)
    const response = await request
    return response.data
}

const getTransactions = async (data) =>{
    const request = axios.post(`${baseUrl}/getAll`, data)
    const response = await request
    return response.data
}

const transactService = {transfer, getTransactions}
export default transactService