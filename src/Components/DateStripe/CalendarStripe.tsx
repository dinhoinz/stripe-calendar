import React, { useState, useEffect } from 'react';
import classes from './CalendarStripe.module.css'
import {PrevButton, NextButton} from '../Buttons/Buttons'
import Week from './Week';

const CalendarStripe: React.FC<{}> = props => {
    const dayjs = require('dayjs')
    const now = dayjs();  
    const [selectedDate, setSelectedDate] = useState([now])
    useEffect(() => {
            let weekArr = [] // Get actual week
            for(let i=0; i < 7; i++){
                weekArr.push(now.add(i, 'day'))
            }
            console.log("🚀 ~ file: CalendarStripe.tsx ~ line 17 ~ useEffect ~ setSelectedDate", selectedDate)
            return setSelectedDate(weekArr)
    },[]);


    return <div>
                    <span className={classes.month}>{dayjs(selectedDate[0]).format('MMM')}</span>
                <div className={classes.container}>
                    <PrevButton selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                        <div className={classes.weekDays}>
                            <Week weekDate={selectedDate} today={now}/>
                        </div>
                    <NextButton selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
                </div>
            </div>
}
export default CalendarStripe