import axios from 'axios'

const API_URL = 'https://marketnest-api.onrender.com/api/v1'

export const api = axios.create({
  baseURL: API_URL
})
