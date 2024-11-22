import React, { useRef, useState } from 'react'
import WelcomeList from './WelcomeList';
import Form from './Form';

const WelcomeApp = () => {
  const [names, setNames] = useState([]);


  return (
    <>  
        <WelcomeList names={names}/>
        <p>Total No of Names is: {names.length}</p>
        <Form names={names} setNames={setNames}/>
    </>
  )
}

export default WelcomeApp