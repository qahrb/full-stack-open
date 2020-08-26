import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({clickHandle, text}) => {
  return (
  <button onClick={clickHandle}>
    {text}
  </button>
  )
}

const Statistics = ({text}) => {
  return (
    <div>
      {text}
    </div>
    )
  
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good + neutral + bad

  const plusGood = () => setGood(good + 1)
  const plusNeutral = () => setNeutral(neutral + 1)
  const plusBad = () => setBad(bad + 1)
  
  const getAverage = () => {
    return ((good) + (neutral*0) + (-bad)) / (total)
  }

  if(total){
    return (
      <div>
        <h2>give feedback</h2>
        <Button clickHandle={plusGood} text={'good'}/>
        <Button clickHandle={plusNeutral} text={'neutral'}/>
        <Button clickHandle={plusBad} text={'bad'}/>
        <h3>statistics</h3> 
        <Statistics  text={'good ' + good}/>
        <Statistics  text={'neutral ' + neutral}/>
        <Statistics  text={'bad ' + bad}/>
        <Statistics  text={'total ' + total}/>
        <Statistics  text={'average ' + getAverage()}/>
        <Statistics  text={'positive ' + ((good / total) * 100) + ' %'}/>
      </div>
    )
  }
  else{
    return (
      <div>
        <h2>give feedback</h2>
        <Button clickHandle={plusGood} text={'good'}/>
        <Button clickHandle={plusNeutral} text={'neutral'}/>
        <Button clickHandle={plusBad} text={'bad'}/>
        <h3>statistics</h3> 
        <div>No feedback given</div>
      </div>
    )
  }


}

ReactDOM.render(<App />, 
  document.getElementById('root')
)