import { useState, useEffect } from 'react'
import countryData from "../services/countrydata"

const Weather = ({country}) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const [lat, lon] = country.capitalInfo.latlng
    countryData
      .getWeather(lat, lon, import.meta.env.VITE_OPENWEATHER_API)
      .then(w => {
        setWeather(w)
      })
  }, [country])

  let curTemp
  let curWindSpeed
  let curIcon
  let curAltText

  if (weather) {
    curTemp = weather.current.temp - 273.15
    curWindSpeed = weather.current.wind_speed
    curIcon = `https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`
    curAltText = weather.current.weather.description
  } else {
    curTemp = 0
    curWindSpeed = 0
    curIcon = null
    curAltText = null
  }

  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      {weather
        ? <><p>Temperature {curTemp.toFixed(2)} Celsius</p>
            <img src={curIcon} alt={curAltText} />
            <p>Wind {curWindSpeed.toFixed(1)} m/s</p>
          </>
        : ''
      }
    </div>
  )
}

export default Weather