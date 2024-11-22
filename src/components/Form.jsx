import React, { useEffect, useRef,useState } from 'react'

const Form = ({names, setNames}) => {
  const [isDisabled, setDisabled] = useState(false);
  const[currName, setCurrName] = useState('');
  const newname =useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if(names.length < 5 && newname.current.value != ''){
      setNames([...names, newname.current.value]);
      setCurrName(newname.current.value);
      newname.current.value = "";
    }else if(names.length >= 5){
      setDisabled(true);
    }
  }

  useEffect(() => {
    if(newname){
      console.log(`Welcome ${currName}, Hope u have a great day`);
    }
    return () => {
      console.log("Unmounted");
    }
  }, [names]);

  return (
    <>
    {isDisabled ? (
      <p>Too Many Names</p>
    ) : (
      <form onSubmit={handleOnSubmit}>
      <input type="text" ref={newname}/>
      <input type="submit"  value="ADD"/>
    </form>
    )}
     
    </>
  )
}

export default Form