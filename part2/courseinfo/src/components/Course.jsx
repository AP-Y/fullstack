import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total total={
        course.parts.reduce((sum, part) => sum + part.exercises, 0)
      } />
    </>
  )
}

export default Course