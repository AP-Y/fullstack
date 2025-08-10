const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.num}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.name1} num={props.num1} />
      <Part name={props.name2} num={props.num2} />
      <Part name={props.name3} num={props.num3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p> Number of exercises {props.num} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header name={course} />
      <Content name1={part1.name} num1={part1.exercises}
               name2={part2.name} num2={part2.exercises}
               name3={part3.name} num3={part3.exercises} />
      <Total num={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App