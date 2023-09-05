import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '2c7a92038c6546bd33464a657d2a9d2a',
    language: 'pt-br',
    page: 1
  }
})

export default api
