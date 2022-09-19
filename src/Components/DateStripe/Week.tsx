import { useState } from 'react'
import classes from './Week.module.css'

const dayjs = require('dayjs') 

interface funcProps {
    weekDate :any[]
    today: Date
}
const Week:React.FC<funcProps> = (props) => {

    const weekDate = props.weekDate;

    const activateDate = (event:any) => {
        event.target.classList.toggle(classes.active)
    }

    return(
        <div>
          {weekDate.map((date) => {
              return (
                <div key={Math.random().toString()} onClick={activateDate} className={`${classes.container} ${classes.changeAnimation} ${dayjs(date).format('DD/MM/YYYY') === dayjs(props.today).format('DD/MM/YYYY') ?  classes.today : '' }`}>
                    <div className={classes.wrapper}>
                        <span className={`${classes.button} ${classes.weekday}`}>{dayjs(date).format('ddd')}</span>
                        <button className={`${classes.button} ${classes.day}`}>{dayjs(date).get('date')}</button>
                    </div>
                </div>
           )
          })}
        </div>
    )
}
export default Week