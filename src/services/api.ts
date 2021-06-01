import axios from 'axios'

const api = axios.create({
  baseURL:"https://api.homolog.mercadoagrotech.com.br/api/v1"
})

export {api}