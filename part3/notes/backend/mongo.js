const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

// vEdmbvfsuk0G86Zs
const password = process.argv[2]

const url = `mongodb+srv://aarnapy:${password}@cluster0.wjzgkvg.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: "CSS is hard",
//   important: false,
// })

// note.save().then(result => {
//   console.log("note saved!")
//   mongoose.connection.close()
// })

Note.find({ important: false }).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})