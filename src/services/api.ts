import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IFOOD_API,
  responseType: 'json',
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export default api
