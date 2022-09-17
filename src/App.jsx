import React, {useState, useEffect, useCallback} from "react";
import {Routes, Route, Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import Gradovi from "./components/gradovi";
import Home from './components/home'

function App() {
  const [data, setData] = useState('Loading...')
  const [darkMode, setDarkMode] = useState(false)
  

  useCallback(()=>{},[])
      const fetchData = async (id) => {
        await fetch(`https://api.vaktija.ba/vaktija/v1/${id}`)
        .then(res => res.json())
        .then(data => setData(data))
      }
    useEffect(()=>{
      fetchData(16)

    }, [])

   
    const handleClick = (e) => {
    
      fetchData(e.target.id)
    }
    console.log(data)
    const handleChange = (e) => {

      setDarkMode(prevDarkMode => !prevDarkMode)
      e.preventDefault()
    }
  
  

  return (
    <div className={darkMode ? 'app-dark' : 'app'}>
      
      <Routes>

        <Route path='/' element={
        <Home 
        data={data}
        dark={darkMode}
        />} 
        />
        
        <Route path='/lokacija' element={
        <Gradovi 
        handleClick={handleClick}
        dark={darkMode}
        />} 
        />

      </Routes>
      {darkMode ? 
      <div className="ico"><i onClick={handleChange} className="fa-regular fa-sun fa-5x"></i></div> : 
      <div className="ico"><i onClick={handleChange} className="fa-solid fa-moon fa-6x"></i></div>
      } 
        
    </div>
    
  );
}

export default App;
