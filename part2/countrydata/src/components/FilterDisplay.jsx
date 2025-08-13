import FilterEntry from "./FilterEntry"

const FilterDisplay = ({names, setSelectCountryNames}) => {
  const handleShow = (name) => {
    setSelectCountryNames([name])
  }

  return (
    names.map(name =>
      <FilterEntry key={name} name={name} handleShow={handleShow}/>)
  )
}

export default FilterDisplay