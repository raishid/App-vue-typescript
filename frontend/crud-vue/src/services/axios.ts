import axios, { type AxiosInstance } from "axios";

const axiosIntance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
})

export default axiosIntance;