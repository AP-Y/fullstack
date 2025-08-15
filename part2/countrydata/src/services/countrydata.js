import axios from 'axios'

const countriesUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const weatherUrl = 'https://api.openweathermap.org/data/3.0/onecall?'

const getAllCountryNames = () => {
  const request = axios.get(`${countriesUrl}all`)
  return request.then(response => response.data.map(country => country.name.common))
}

const getCountryInfo = (name) => {
  const request = axios.get(`${countriesUrl}name/${encodeURIComponent(name)}`)
  return request.then(response => response.data)
}

const getWeather = (lat, lon, api_key) => {
  const fullUrl = `${weatherUrl}lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${api_key}`
  console.log(`https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=${api_key}`)
  const request = axios.get(encodeURI(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${api_key}`))
  return request.then(response => response.data)
}

export default { getAllCountryNames, getCountryInfo, getWeather }