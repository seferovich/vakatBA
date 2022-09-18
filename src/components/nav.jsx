import React from "react";
import { Link } from "react-router-dom";
import '../styles/nav.css'

const Nav = ()=>{
    return(
        <nav>
            <h2 className="nav-logo">VakatBA</h2>
            <Link className="lokacija" to='/vakatBA/lokacija'>Lokacija</Link>
        </nav>
    )
}

export default Nav