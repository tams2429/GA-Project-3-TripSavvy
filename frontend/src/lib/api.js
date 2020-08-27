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

export const editCity = (id, formData) => {
  return axios.put(`/api/cities/${id}`, formData, withHeaders())
}

export const deleteCity = (id) => {
  return axios.delete(`/api/cities/${id}`, withHeaders())
}

export const favoriteToggle = (id) => {
  return axios.post(`/api/cities/${id}/favorite`, {}, withHeaders())
}

export const wishListToggle = (id) => {
  return axios.post(`/api/cities/${id}/wishlist`, {}, withHeaders())
}

export const addComment = (formData, id) => {
  return axios.post(`/api/cities/${id}/comments`, formData, withHeaders())
}

export const deleteComment = (formData, cityId, commentId) => {
  return axios.delete(`/api/cities/${cityId}/comments/${commentId}`, formData, withHeaders())
}

//* Profile Page Requests
export const getProfile = () => {
  return axios.get('/api/profile', withHeaders())
}

//* Create a City Page Request
export const createCity = formData => {
  return axios.post('/api/cities', formData, withHeaders())
}



