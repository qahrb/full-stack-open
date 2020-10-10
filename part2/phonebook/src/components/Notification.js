import React from 'react';

const Notification = ({ message, messageType }) => {
    const errorMessageStyle = {
      color: 'red',
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    }

    const normalMessageStyle = {
      color: 'green',
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    }
    console.log(messageType);

    if (messageType === 'normal'){
    return (
      <div style={normalMessageStyle}>
        {message}
      </div>
    )}
    if (messageType === 'error'){
      return (
        <div style={errorMessageStyle}>
          {message}
        </div>
      )}
    
    // if (message === '') {
      return null
    // }

    // return (
    //     <div style={normalMessageStyle}>
    //       {message}
    //     </div>)
  
    
  }

export default Notification;