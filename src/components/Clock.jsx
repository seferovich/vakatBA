import React, {useEffect, useState} from 'react'

const Clock = (props) => {


    // Clock that shows immidiately after load, idk if theres an other way to fix this.
    let clock = new Date();
    let hours = clock.getHours().toString()
    let minutes = clock.getMinutes().toString()
    let seconds = clock.getSeconds().toString()

    if(hours < 10){
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    const [time, setTime] = useState(hours + ':' +  minutes + ':' + seconds)


    
    // Clock
    useEffect(()=>{
        
        setInterval(()=>{
            let clock = new Date();
            let hours = clock.getHours().toString()
            let minutes = clock.getMinutes().toString()
            let seconds = clock.getSeconds().toString()

            if(hours < 10){
                hours = "0" + hours;
            }
    
            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            setTime(hours + ':' +  minutes + ':' + seconds)
        }, 1000)
        
    }, [])

    return(
        <div>
            <h2 className={props.dark ? 'clock dark' : 'clock'}>{time}</h2>
        </div>

    )
}

export default Clock
