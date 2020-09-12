import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PersonForm from './PersonForm';
import Persons from './Persons';
import Filter from './Filter';

import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
  
  const addPerson = (event) => {
    event.preventDefault();
    let alreadyAdded = false;
    persons.forEach(element => {
        if (element.name === newName)alreadyAdded=true;
    });
    if (alreadyAdded){
        setNewName('');
        setNewNumber('');
        window.alert(`${newName} is already added to phonebook`);
    }
    else{
        const personObject = {
        name:newName,
        number: newNumber,
        date: new Date().toISOString(),
        id: persons.length +1,
      }
    setPersons(persons.concat(personObject))
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const personsToShow = newSearch 
  ? persons.filter(person => person.name.toLowerCase().startsWith(newSearch.toLowerCase())) 
  : persons

  return(
    <div>
      <h2>Phonebook</h2>
      <Filter 
        newSearch={newSearch} 
        handleSearchChange={handleSearchChange}
      />
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons
        personsToShow={personsToShow}
      />
    </div>
  )
}

export default App