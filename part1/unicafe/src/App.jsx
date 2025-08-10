import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({name, num}) => <p>{name} {num}</p>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <StatisticLine name="good" num={good} />
      <StatisticLine name="neutral" num={neutral} />
      <StatisticLine name="bad" num={bad} />
      <StatisticLine name="all" num={total} />
      <StatisticLine name="average" num={(good - bad)/total} />
      <StatisticLine name="positive" num={(good/total*100).toString() + "%"} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Header text="give feedback" />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App