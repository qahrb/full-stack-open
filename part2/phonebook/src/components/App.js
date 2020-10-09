import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import PersonForm from './PersonForm';
import Persons from './Persons';
import Filter from './Filter';
import phoneBook from '../services/people'
import axios from 'axios'
import shortid from 'shortid'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')

  const hook = () => {
    phoneBook
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }
  useEffect(hook, [])
  
  const addPerson = (event) => {
    event.preventDefault();
    let alreadyAdded = false;
    let updateId;
    persons.forEach(element => {
        if (element.name === newName){
          alreadyAdded=true;
          updateId = element.id;
        }
    });
    if (alreadyAdded){

      const personObject = {
        number: newNumber,
        name:newName,
        date: new Date().toISOString(),
      }

      phoneBook
      .update(updateId, personObject)
      .then(response => {
        setPersons(persons.map(person => person.id !== updateId ? person : response))
        setNewName('');
        setNewNumber('');
      })

        // setNewName('');
        // setNewNumber('');
        // window.alert(`${newName} is already added to phonebook`);
    }
    else{
        const personObject = {
        name:newName,
        number: newNumber,
        date: new Date().toISOString(),
        id: shortid.generate(),
      }
      phoneBook
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(personObject))
        setNewName('');
        setNewNumber('');
      })
    
    }
  }
  const removePerson = id =>{

    const result = window.confirm(`Do you want to delete ${id}`)
    if(result){
      phoneBook
        .remove(id)
        .then(response =>{
          phoneBook
            .getAll()
            .then(response => {
              setPersons(response)
            })
        })
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
        removePerson={removePerson}
      />
    </div>
  )
}

export default App