import { useState, useEffect } from 'react'
import phonebookService from './services/phonebook'
import Header from './components/Header'
import Notification from './components/Notification'
import Filter from './components/Filter'
import Form from './components/Form'
import Display from './components/Display'

const App = () => {
  const emptyPerson = {name: '', number: ''}
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState(emptyPerson)
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(initialData => {setPersons(initialData)})
  }, [])

  const displayMessage = (text) => {
    setMessage(text)
    setTimeout(() => {
      setMessage(null)
    }, 2500)
  }

  const personsToDisplay = persons.filter(person => person.name.toLowerCase().includes(filter))

  return (
    <div>
      <Header text="Phonebook" />
      <Notification message={message} />
      <Filter filter={filter} setFilter={setFilter} />
      <Header text="add a new" />
      <Form persons={persons} setPersons={setPersons}
            newPerson={newPerson} setNewPerson={setNewPerson}
            displayMessage={displayMessage} emptyPerson={emptyPerson} />
      <Header text="Numbers" />
      <Display persons={personsToDisplay} setPersons={setPersons}
               displayMessage={displayMessage} />
    </div>
  )
}

export default App