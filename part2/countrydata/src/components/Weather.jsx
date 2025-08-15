import { useState, useEffect } from 'react'
import countryData from "../services/countrydata"

const Weather = ({country}) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const [lat, lon] = country.capitalInfo.latlng
    countryData
      .getWeather(lat, lon, import.meta.env.VITE_OPENWEATHER_API)
      .then(w => {
        console.log(w)
        setWeather(w)
        console.log(weather)
      })
  }, [country, weather])

  return (
    <div>
      <h2>Weather in {country.capital}</h2>

    </div>
  )
}

export default Weather