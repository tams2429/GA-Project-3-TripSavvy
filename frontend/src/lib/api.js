import axios from 'axios'
import { getToken } from './auth'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

//* Login and Register Requests
export const register = formData => {
  return axios.post('/api/register', formData)
}

export const login = formData => {
  return axios.post('/api/login', formData)
}


//* Home Page Requests
export const getAllCities = () => {
  return axios.get('/api/cities')
}

//* CityCard Page Requests
export const getSingleCity = (id) => {
  return axios.get(`/api/cities/${id}`)
}

export const editCity = (formData, id) => {
  return axios.put(`/api/cities/${id}`, formData, withHeaders())
}

export const deleteCity = (id) => {
  return axios.delete(`/api/cities/${id}`, withHeaders())
}

//* Profile Page Requests
export const getProfile = () => {
  return axios.get('/api/profile', withHeaders())
}

//* Create a City Page Request
export const createCity = formData => {
  return axios.post('/api/cities', formData, withHeaders())
}



