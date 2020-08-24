import axios from 'axios'


export const getAllCities = () => {
  return axios.get('/api/cities')
}
