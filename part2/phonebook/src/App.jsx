import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Filter from './components/Filter'
import Form from './components/Form'
import Display from './components/Display'

const App = () => {
  const emptyPerson = {name: '', number: ''}
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState(emptyPerson)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <Header text="Phonebook" />
      <Filter filter={filter} setFilter={setFilter}/>
      <Header text="add a new" />
      <Form persons={persons} setPersons={setPersons}
            newPerson={newPerson} setNewPerson={setNewPerson} emptyPerson={emptyPerson} />
      <Header text="Numbers" />
      <Display persons={persons.filter(person => person.name.toLowerCase().includes(filter))} />
    </div>
  )
}

export default App