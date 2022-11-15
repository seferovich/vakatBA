import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import { nanoid } from "nanoid";
import '../styles/cities.css';
import { fetchVakat } from "../redux/slices/vakatSlice";
import { motion } from "framer-motion";
import { useAppDispatch , useAppSelector } from "../hooks";
import { fetchCities } from "../redux/slices/citiesSlice";

type citiesProps = {
    dark?: boolean
}

const Cities = (props: citiesProps) => {

    const city = useAppSelector((state) => state.cities.cities)
    const dispatch = useAppDispatch()
    
    

    const handleFetch = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const target = e.target as Element
        dispatch(fetchVakat(parseInt(target.id)))
        localStorage.setItem('location', target.id)
    }
    
    // Rendering API city data
    const gradovi = city.map((grad, i) => {
        return <Link 
        className={`grad ${props.dark ? 'dark' : ''}`}
        to='/vakatBA' 
        onClick={handleFetch} 
        key={nanoid()} 
        id={i.toString()}>
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


