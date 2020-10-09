import React from 'react';
// import ReactDOM from 'react-dom';


const Persons = ({personsToShow, removePerson}) => {

    return(
        <div>
        {personsToShow.map(
          (person) =>  <div>
                          <p>{person.name}  {person.number}</p>
                          <button onClick={() => removePerson(person.id)}>delete</button>
                        </div>
        )}
      </div>
    )

}


export default Persons;