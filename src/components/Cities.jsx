import React, {useCallback, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import '../styles/cities.css';
import { fetchCities } from "../redux/slices/citiesSlice";
import { fetchVakat } from "../redux/slices/vakatSlice";
import { motion } from "framer-motion";

const Cities = (props) => {
   
    


    const city = useSelector((state) => state.cities.cities)
    const dispatch = useDispatch()

    const handleFetch = (e) => {
        dispatch(fetchVakat(e.target.id))  
        localStorage.setItem('location', e.target.id)
    }
    
    // Rendering API city data
    const gradovi = city.map((grad, i) => {
        return <Link 
        className={`grad ${props.dark ? 'dark' : ''}`}
        to='/vakatBA' 
        onClick={handleFetch} 
        key={nanoid()} 
        id={parseInt(i)}>
            {grad}
        </Link>
    })
        
    
    return(
        <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <Link className="link" to="/vakatBA"><i className={`${props.dark ? 'dark' : ''} fa-sharp fa-solid fa-x fa-2xl`}></i></Link>
                <div className="gradovi">
                    {gradovi} 
                </div>
            </motion.div>
        </div>
    )
}

export default Cities