import React from 'react';


const Filter = (props) => {

    const {newSearch, handleSearchChange} = props

    

  return (
    <div>
        filter shown with <input value={newSearch} onChange={handleSearchChange}/>
    </div>
  )

}


export default Filter;