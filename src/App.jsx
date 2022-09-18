import React, {useState, useEffect} from "react";
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
    fetchData(16)
    fetchCity()
  },[])
 

  // Fetching for cities
  const handleFetch = (e) => {
    fetchData(e.target.id)
  }

  // Switching dark/light themes
  const handleChange = (e) => {
    setDarkMode(prevDarkMode => !prevDarkMode)
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
