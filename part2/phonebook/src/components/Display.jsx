import Entry from './Entry'

const Display = ({persons}) => {
  return (
    <div>
      {persons.map(person =>
        <Entry key={person.id} person={person} />
      )}
    </div>
  )
}

export default Display