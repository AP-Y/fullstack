import Entry from './Entry'
import phonebookService from '../services/phonebook'

const Display = ({persons, setPersons}) => {
  const handleDeleteOf = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService
        .remove(person.id)
        .then(_deletedPerson => {
          setPersons(persons.filter(p => p.id !== person.id))})
    }
  }

  return (
    <div>
      {persons.map(per =>
        <Entry key={per.id} person={per} handleDelete={() => handleDeleteOf(per)}/>
      )}
    </div>
  )
}

export default Display