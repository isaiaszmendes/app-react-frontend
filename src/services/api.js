import axios from 'axios'

const api = axios.create({
   baseURL: 'https://backend-isa.herokuapp.com'
})

export default api