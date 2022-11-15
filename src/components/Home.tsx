import React, {useEffect} from "react";
import { nanoid } from "nanoid";
import { useAppDispatch , useAppSelector } from "../hooks";
import { fetchVakat } from "../redux/slices/vakatSlice";
import { fetchCities } from "../redux/slices/citiesSlice";
import '../styles/home.css';
import Nav from "./Nav";
import Clock from "./Clock";
import { motion } from "framer-motion";

type homeProps = {
    dark: boolean,
    handleChange: () => void
}
const Home = (props: homeProps) => {
    const data = useAppSelector((state) => state.vakat.data)
    const dispatch = useAppDispatch()
    
    // Data fetching from redux store
    useEffect(() => {
        if(localStorage.location){
            dispatch(fetchVakat(JSON.parse(localStorage.getItem('location') || '{}')))
          }else{
            dispatch(fetchVakat(77))
          }
          dispatch(fetchCities())
    }, [])
    
    // Rendering API data
    const vakatovi = data?.vakat?.map((namaz: string, i: number ) =>{
        return <h2 className={`vakat ${props.dark ? 'dark' : ''}`} id={String(i)} key={nanoid()}>{namaz}</h2>
    })  
    const vaktovi = (): any => {  
        if(data?.vakat){
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

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Nav />
            </motion.div>

            <div className="home">

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                    <h1 className="lokacija-main">Vaktija {data?.lokacija}</h1>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                    <Clock 
                    dark={props.dark}
                    />
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
                    <div className="vaktovi">
                        {vaktovi()}
                    </div>
                </motion.div>

            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1 }}>
                {props.dark ? 
                <div className="ico"><i onClick={props.handleChange} className="fa-regular fa-sun fa-5x icon"></i></div> : 
                <div className="ico"><i onClick={props.handleChange} className="fa-solid fa-moon fa-6x icon"></i></div>
                } 
            </motion.div>

        </div>
    )
}

export default Home