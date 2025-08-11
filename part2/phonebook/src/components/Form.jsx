const Form = ({persons, setPersons, newPerson, setNewPerson, emptyPerson}) => {
  const addPerson = (event) => {
    event.preventDefault()
    const uniquePerson = persons.every(
      person => person.name !== newPerson.name || person.number !== newPerson.number)
    if (uniquePerson) {
      newPerson.id = persons.length + 1
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newPerson.name} at ${newPerson.number} is already added to phonebook`)
    }
    setNewPerson(emptyPerson)
  }

  const handleNameChange = (event) => setNewPerson({...newPerson, name: event.target.value})

  const handleNumberChange = (event) => setNewPerson({...newPerson, number: event.target.value})

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newPerson.name} onChange={handleNameChange} />
        <br />
        number: <input value={newPerson.number} onChange={handleNumberChange} />
      </div>
      <button type="submit">add</button>
    </form>
  )
}

export default Form