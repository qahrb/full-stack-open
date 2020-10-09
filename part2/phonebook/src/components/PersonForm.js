import React from 'react';
// import ReactDOM from 'react-dom';


const PersonForm = (props) => {
    const {addPerson, newName, handleNameChange, newNumber, handleNumberChange} = props
    return(
        <div>
            <form onSubmit={addPerson}>
                <div>
                name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                <button type="submit" >add</button>
                </div>
            </form>
        </div>
    )
}


export default PersonForm;