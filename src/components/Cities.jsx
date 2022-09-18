import React, {useCallback, useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { nanoid } from "nanoid";
import '../styles/cities.css'

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
            <Link className="link" to="/vakatBA"><i className={`${props.dark ? 'dark' : ''} fa-sharp fa-solid fa-x fa-2xl`}></i></Link>
            <div className="gradovi">
                {gradovi} 
            </div>
        </div>
    )
}

export default Cities