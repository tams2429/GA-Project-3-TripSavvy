import axios from 'axios'
import { getToken } from './auth'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

const openweatherApiAccessToken = process.env.REACT_APP_OPENWEATHERMAP_ACCESS_TOKEN
const openCageDataApiAccessToken = process.env.REACT_APP_OPENCAGEDATA_ACCESS_TOKEN

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

export const deleteComment = (cityId, commentId) => {
  return axios.delete(`/api/cities/${cityId}/comments/${commentId}`, withHeaders())
}

//* weather app requests for cities

export const getWeather = (cityName) => {
  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${openweatherApiAccessToken}`)
}

export const getInfo = (cityLat, cityLng) => {
  return axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${cityLat},${cityLng}&key=${openCageDataApiAccessToken}`)
}


//* Profile Page Requests
export const getProfile = () => {
  return axios.get('/api/profile', withHeaders())
}

export const editProfile = (formData) => {
  return axios.put('/api/profile', formData,  withHeaders())
}

//* Create a City Page Request
export const createCity = formData => {
  return axios.post('/api/cities', formData, withHeaders())
}



