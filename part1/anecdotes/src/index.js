import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Max = (props) => {
  
  if (props.max.place !== null){
    return(
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{props.anecdotes[props.max.place]} hi</p>
        <p>
          has {props.max.value} votes
        </p>
      </div>
    )
  }
  else return(null)
}

const App = (props) => {

  const points = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0}
  


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  
  const changeSelected = () => {
    setSelected((Math.floor(Math.random() * props.anecdotes.length - 1) + 1))
  }

  if(votes[selected] > max.value) {
    max.value = votes[selected]
    max.place = selected
  };

  const voteHandle = () => {
    setVotes({ ...votes, [selected]: votes[selected] + 1})
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br/>
      has {votes[selected]} votes
      <br/>
      <button onClick={voteHandle}>vote</button>
      <button onClick={changeSelected}>next anecdote</button>
      <Max votes = {votes} max = {max} anecdotes = {props.anecdotes}/>
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
let max = {place: null, value:0}

ReactDOM.render(
  <App anecdotes={anecdotes} max = {max} />,
  document.getElementById('root')
)
