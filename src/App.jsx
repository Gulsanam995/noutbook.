import React from 'react'
import './App.css'
import SearchParams from './SearchParams';
import { useState, useEffect } from 'react';

const App = () => {
const[count, setCount] = useState(0);


  
  return (
    <div className='App'>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
}

export default App

