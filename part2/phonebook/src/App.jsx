import { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'

const App = () => {
  const emptyPerson = {name: '', number: ''}
  const [persons, setPersons] = useState([{name: 'Arto Hellas', number: '040-1234567'}])
  const [newPerson, setNewPerson] = useState(emptyPerson)

  const addPerson = (event) => {
    event.preventDefault()
    const uniquePerson = persons.every(
      person => person.name !== newPerson.name || person.number !== newPerson.number)
    if (uniquePerson) {
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newPerson.name} at ${newPerson.number} is already added to phonebook`)
    }
    setNewPerson(emptyPerson)
  }

  const handleNameChange = (event) => {
    setNewPerson({...newPerson, name: event.target.value})
  }

  const handleNumberChange = (event) => {
    setNewPerson({...newPerson, number: event.target.value})
  }

  return (
    <div>
      <Header text="Phonebook" />
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson.name} onChange={handleNameChange}/>
          <br />
          number: <input value={newPerson.number} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Header text="Numbers" />
      <div>
        {persons.map(person => <Entry key={`${person.name} ${person.number}`} person={person} />)}
      </div>
    </div>
  )
}

export default App