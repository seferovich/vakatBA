import React, {useCallback, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import { nanoid } from "nanoid";
import '../styles/cities.css';
import { motion } from "framer-motion";
const Cities = (props) => {
    // Rendering API city data
    const gradovi = props.city.map((grad,i) => {
        return <Link 
        className={`grad ${props.dark ? 'dark' : ''}`}
        to='/vakatBA' 
        onClick={props.handleClick} 
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