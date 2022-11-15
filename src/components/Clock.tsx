import React, {useEffect, useState} from 'react'

type clockProps = {
    dark?: boolean
}
const Clock = (props: clockProps) => {

    // Clock that shows immidiately after load, idk if theres an other way to fix this.
    let clock: Date = new Date();
    let hours: string = clock.getHours().toString()
    let minutes: string = clock.getMinutes().toString()
    let seconds: string = clock.getSeconds().toString()

    if(parseInt(hours) < 10){
        hours = "0" + hours;
    }

    if (parseInt(minutes) < 10) {
        minutes = '0' + minutes;
    }

    if (parseInt(seconds) < 10) {
        seconds = '0' + seconds;
    }

    const [time, setTime] = useState(hours + ':' +  minutes + ':' + seconds)


    
    // Clock
    useEffect(()=>{
        
        setInterval(()=>{
            let clock: Date = new Date();
            let hours: string = clock.getHours().toString()
            let minutes: string = clock.getMinutes().toString()
            let seconds: string = clock.getSeconds().toString()

            if(parseInt(hours) < 10){
                hours = "0" + hours;
            }

            if (parseInt(minutes) < 10) {
                minutes = '0' + minutes;
            }

            if (parseInt(seconds) < 10) {
                seconds = '0' + seconds;
            }

            setTime(hours + ':' +  minutes + ':' + seconds)
        }, 500)
        
    }, [])

    return(
        <div>
            <h2 className={props.dark ? 'clock dark' : 'clock'}>{time}</h2>
        </div>

    )
}

export default Clock
