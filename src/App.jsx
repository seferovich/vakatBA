import React, {useState, useEffect, useCallback} from "react";
import {Routes, Route} from 'react-router-dom';

import Cities from "./components/Cities";
import Home from './components/Home';


function App() {
  const [darkMode, setDarkMode] = useState(false)

  
  useEffect(()=>{
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
        dark={darkMode}
        handleChange={handleChange}
        />} 
        />
        
        <Route path='/vakatBA/lokacija' element={ <Cities dark={darkMode}/> } />

      </Routes>
      
    </div>
    
  );
}

export default App;
