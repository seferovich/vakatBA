import React, {useState, useEffect} from "react";
import { nanoid } from "nanoid";
import '../styles/home.css'
import Nav from "./Nav";
import Clock from "./Clock"
const Home = (props) => {
    

    

    // Rendering API data
    const vakatovi = props.data.vakat?.map((namaz, i ) =>{
        return <h2 className={`vakat ${props.dark ? 'dark' : ''}`} id={i}key={nanoid()}>{namaz}</h2>
    })
   
    const vaktovi = () => {  
        if(props.data.vakat){
            return (
                <div className="vaktovi">
                    <div className='vakat-time'>
                        {vakatovi}
                    </div>
                    <div className="vakat-name">
                        <h1>Zora</h1>
                        <h1>Izlazak sunca</h1>
                        <h1>Podne</h1>
                        <h1>Ikindija</h1>
                        <h1>Aksam</h1>
                        <h1>Jacija</h1>
                    </div>
                </div>
            )
        } 
    }
    
    return(
        
        <div>
            <Nav />
            <div className="home">
                <h1 className="lokacija-main">Vaktija {props.data.lokacija}</h1>
                <Clock 
                dark={props.dark}
                />
                <div className="vaktovi">
                    {vaktovi()}
                </div>
            </div>
            {props.dark ? 
            <div className="ico"><i onClick={props.handleChange} className="fa-regular fa-sun fa-5x"></i></div> : 
            <div className="ico"><i onClick={props.handleChange} className="fa-solid fa-moon fa-6x"></i></div>
            } 
        </div>
    )
}

export default Home