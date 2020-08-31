import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PersonForm from './PersonForm';
import Persons from './Persons';
import Filter from './Filter';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')
  
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