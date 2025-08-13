import { useState, useEffect } from 'react'
import noteService from './services/notes'
import Notification from './components/Notification'
import Note from './components/Note'
import Footer from './components/Footer'

const App = () => {
  const [notes, setNotes] = useState(null)
  const [newNote, setNewNote] = useState("N/A")
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  if (!notes) {
    return null
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => (
        setNotes(notes.map(note => note.id === id? returnedNote : note))))
      .catch(_error => {
        setErrorMessage(`The note "${note.content}" doesn't exist on the server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObj)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => setNewNote(event.target.value)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map(note =>
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="Submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App