import axios from "axios"

const baseUrl = "http://localhost:5000/user" //check this line

const signup = async (data) => {
    const request = axios.post(`${baseUrl}/signup`, data)
    const response = await request
    return response.data
}

const login = async (data) => {
    const request = axios.post(`${baseUrl}/login`, data)
    const response = await request
    return response.data
}

const userService = {signup, login}

export default userService