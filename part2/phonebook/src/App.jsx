import { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'

const App = ({initialPersons}) => {
  const emptyPerson = {name: '', number: ''}
  const [persons, setPersons] = useState(initialPersons)
  const [newPerson, setNewPerson] = useState(emptyPerson)
  const [filter, setFilter] = useState('')

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

  const handleFilterChange = (event) => setFilter(event.target.value.toLowerCase())

  const handleNameChange = (event) => setNewPerson({...newPerson, name: event.target.value})

  const handleNumberChange = (event) => setNewPerson({...newPerson, number: event.target.value})

  return (
    <div>
      <Header text="Phonebook" />

      filter show with <input value={filter} onChange={handleFilterChange} />

      <Header text="add a new" />

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson.name} onChange={handleNameChange} />
          <br />
          number: <input value={newPerson.number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <Header text="Numbers" />

      <div>
        {persons.filter(person => person.name.toLowerCase().includes(filter)).map(person => <Entry key={person.id} person={person} />)}
      </div>
    </div>
  )
}

export default App