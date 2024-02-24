import React, { useState } from 'react'
import Navb from './Components/Navb'
import HomePage from './Components/HomePage'




const App = () => {
  const [valueTitle, setValueTitle] = useState("");
  const [getDataFrom, setGetDataFrom] = useState([]);
  return (
    <>
      <Navb setValueTitle={setValueTitle}/>
      <HomePage setGetDataFrom={setGetDataFrom} valueTitle={valueTitle}/> 
   
    </>
  )
}

export default App
