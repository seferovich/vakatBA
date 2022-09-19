import React, {useState, useEffect, useCallback} from "react";
import {Routes, Route} from 'react-router-dom'
import Cities from "./components/Cities";
import Home from './components/Home'

function App() {
  const [data, setData] = useState('Loading...')
  const [city, setCity] = useState([]) 
  const [darkMode, setDarkMode] = useState(false)
  
  
  
  // API fetches for data and cities

  const fetchData = async (id) => {
    await fetch(`https://api.vaktija.ba/vaktija/v1/${id}`)
    .then(res => res.json())
    .then(data => setData(data))
  }

  const fetchCity = () => {
    fetch('https://api.vaktija.ba/vaktija/v1/lokacije')
    .then(res => res.json())
    .then(data => setCity(data))
  }
  
  
  useEffect(()=>{
    // Get location from LS
    if(localStorage.location > 1){
      fetchData(JSON.parse(localStorage.getItem('location')))
    }else{
      fetchData(77)
    }

    fetchCity()


    // Get theme from LS
    if(localStorage.length > 0){
      setDarkMode(JSON.parse(localStorage.getItem('darkMode')))
    }else{
      localStorage.setItem('darkMode', darkMode)
    }
  }, [])

  // Track theme changes in LS
  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem('darkMode')))
  }, [darkMode])
 
 

  // Fetching for cities
  const handleFetch = (e) => {
    fetchData(e.target.id)
    localStorage.setItem('location', e.target.id)
  }

  
  // Switching dark/light themes
  const handleChange = (e) => {
    setDarkMode(prevDarkMode => localStorage.setItem('darkMode', !prevDarkMode))
    
    e.preventDefault()
  }

  

  return (
    <div className={darkMode ? 'app-dark' : 'app'}>    
      <Routes>

        <Route path='/vakatBa' element={
        <Home 
        data={data}
        dark={darkMode}
        handleChange={handleChange}
        />} 
        />
        
        <Route path='/vakatBA/lokacija' element={
        <Cities
        city={city}
        data={data} 
        handleClick={handleFetch}
        dark={darkMode}
        />} 
        />

      </Routes>   
    </div>
    
  );
}

export default App;
