import axios from "axios";

//const BASE_URL = "http://localhost:5000/api/";
 export const BASE_URL = "https://dignity-api-test.vercel.app/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTkxNzhjM2MzZTBmYzQ0ZGYxOWZlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzUzODMwMCwiZXhwIjoxNjM3Nzk3NTAwfQ.UU2SkKECwX4Fjw4wy7MTqjctmu-vmpSq65Qj82rXyZ0";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    haader: {token:`Bearer ${TOKEN}` }
});