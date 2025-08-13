import { useState, useEffect } from 'react'
import countryData from './services/countrydata'
import FilterDisplay from './components/FilterDisplay'
import Country from './components/Country'

const App = () => {
  const [search, setSearch] = useState('')
  const [countryNames, setCountryNames] = useState([])
  const [selectCountryNames, setSelectCountryNames] = useState([])

  useEffect(() => {
    countryData
      .getAllCountryNames()
      .then(list => {
        setCountryNames(list)
        setSelectCountryNames(list)
      })
  }, [])

  const handleSearch = (event) => {
    const newSearch = event.target.value.toLowerCase()
    setSearch(newSearch)

    setSelectCountryNames(countryNames.filter(name =>
      name.toLowerCase().includes(newSearch)
    ))
  }

  const numSelected = selectCountryNames.length;

  return (
    <>
      find countries <input value={search} onChange={handleSearch}></input>
      <br />
      {
        search.length === 0
          ? ''
          : numSelected === 1
            ? <Country name={selectCountryNames[0]} />
            : numSelected <= 10
              ? <FilterDisplay names={selectCountryNames}
                               setSelectCountryNames={setSelectCountryNames} />
              : <div>Too many matches, specify another filter</div>
      }
    </>
  )
}

export default App