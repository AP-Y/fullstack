import { useState, useEffect } from 'react'
import countryData from '../services/countrydata'
import Line from './Line'
import Languages from './Languages'
import Flag from './Flag'
import Weather from './Weather'

const Country = ({name}) => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    countryData
      .getCountryInfo(name)
      .then(returnedCountry => {
        setCountry(returnedCountry)
      })
  }, [name])

  return (
    <div>
      <h1>{name}</h1>
      {
        country === null
          ? ''
          : <>
              <Line country={country} field="capital" />
              <Line country={country} field="area" />
              <Languages country={country} />
              <Flag country={country} />
              <Weather country={country} />
            </>
      }
    </div>
  )
}

export default Country