import classes from './Buttons.module.css'
import { Dispatch, SetStateAction } from "react";

interface funcProps {
    setSelectedDate: Dispatch<SetStateAction<any[]>>;
    selectedDate: any[]
  }


export const NextButton:React.FC<funcProps> = props => {
    const buttonHandler = () => {
        let weekArr = []
        for(let i=0; i < 7; i++){
            weekArr.push(props.selectedDate[6].add(i, 'day'))
        }
        return props.setSelectedDate(weekArr)
    }

    return(
        <button onClick={buttonHandler} className={`${classes.button} NextButton`}>{">"}</button>
    )
}

export const PrevButton:React.FC<funcProps> = props => {

    const buttonHandler = () => {
        let weekArr = []
        for(let i=0; i < 7; i++){
            weekArr.push(props.selectedDate[0].subtract(i, 'day'))
        }
        return props.setSelectedDate(weekArr.reverse())
    }
    return(
        <button onClick={buttonHandler} className={`${classes.button} prevButton`}>{"<"}</button>
    )
}
