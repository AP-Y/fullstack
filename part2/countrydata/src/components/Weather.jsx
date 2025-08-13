import { useState, useEffect } from 'react'
import countryData from "../services/countrydata"

const Weather = ({country}) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const [lat, lon] = country.capitalInfo.latlng
    countryData
      .getWeather(lat, lon, "9615b66d22cfb3d0781274587cadfae4")
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