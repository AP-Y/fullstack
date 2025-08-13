const FilterEntry = ({name, handleShow}) => {
  return (
    <div>
      {name}
      <button onClick={() => handleShow(name)}>Show</button>
    </div>
  )
}

export default FilterEntry