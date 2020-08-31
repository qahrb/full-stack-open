import React from 'react';
import ReactDOM from 'react-dom';


const Persons = ({personsToShow}) => {

    return(
        <div>
        {personsToShow.map((person) =>  <p>{person.name} {person.number}</p>)}
      </div>
    )

}


export default Persons;