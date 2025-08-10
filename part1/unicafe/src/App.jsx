import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Stat = ({name, num}) => <p>{name} {num}</p>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const noReviews = total === 0

  return (
    <div>
      <Stat name="good" num={good} />
      <Stat name="neutral" num={neutral} />
      <Stat name="bad" num={bad} />
      <Stat name="all" num={total} />
      <Stat name="average" num={noReviews ? 0 : (good - bad)/total} />
      <Stat name="positive" num={(noReviews ? 0 : (good/total*100).toString()) + "%"} />
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