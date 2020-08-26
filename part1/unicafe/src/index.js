import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({clickHandle, text}) => {
  return (
  <button onClick={clickHandle}>
    {text}
  </button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plusGood = () => setGood(good + 1)
  const plusNeutral = () => setNeutral(neutral + 1)
  const plusBad = () => setBad(bad + 1)
  
  return (
    <div>
      <h2>give feedback</h2>
      <Button clickHandle={plusGood} text={'good'}/>
      <Button clickHandle={plusNeutral} text={'neutral'}/>
      <Button clickHandle={plusBad} text={'bad'}/>
      <h3>statistics</h3>
      <span>good {good}</span><br/>
      <span>neutral {neutral}</span><br/>
      <span>bad {bad}</span>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)