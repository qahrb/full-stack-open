import React from 'react';
import ReactDOM from 'react-dom';


const Filter = (props) => {

    const {newSearch, handleSearchChange} = props

    

  return (
    <div>
        filter shown with <input value={newSearch} onChange={handleSearchChange}/>
    </div>
  )

}


export default Filter;