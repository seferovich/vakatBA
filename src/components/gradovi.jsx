import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import { nanoid } from "nanoid";
import '../styles/gradovi.css'

const Gradovi = (props) => {
    const [city, setCity] = useState([])
    

    useEffect(()=>{
        const fetchCity = () => {
            fetch('https://api.vaktija.ba/vaktija/v1/lokacije')
            .then(res => res.json())
            .then(data => setCity(data))
        }
        fetchCity()
    }, [])
    
    

    const gradovi = city.map((grad,i) => {
        return <Link 
        className={`grad ${props.dark ? 'dark' : ''}`}
        to='/' 
        onClick={props.handleClick} 
        key={nanoid()} 
        id={parseInt(i)}>
            {grad}
        </Link>
     })
    
    
    return(
        <div>
            <Link className="link" to="/"><i className={`${props.dark ? 'dark' : ''} fa-sharp fa-solid fa-x fa-2xl`}></i></Link>
            <div className="gradovi">
                {gradovi} 
            </div>
        </div>
    )
}

export default Gradovi