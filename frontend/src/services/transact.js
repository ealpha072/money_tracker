import axios from "axios";

const baseUrl = "http://localhost:5000/transact"

const transfer = async (data) => {
    const request = axios.post(`${baseUrl}/transact`, data)
    const response = await request
    return response.data
}

const transactService = {transfer}
export default transactService