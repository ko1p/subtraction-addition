import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserAnswer } from '../../store/actions/calculations';
import styles from './Counting.module.css';

import { ICountingProps, IResultsState } from "../../interfaces";

export const Counting: React.FC<ICountingProps> = ({ data }) => {
    const dispatch = useDispatch();
    const isResultsTouched = useSelector((state: IResultsState) => state.results.isResultsTouched);
    const isCorrectAnswer = data.isCorrect;

    let classes = [styles.input];
    
    if (isCorrectAnswer && isResultsTouched) {
        classes.push(styles.input_correct);
    } 
    if (!isCorrectAnswer && isResultsTouched) {
        classes.push(styles.input_incorrect);
    }

    const onChangeHandlerR = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userAnswer = +e.target.value;
        const calculation = data.calculation;
        const isCorrect = data.rightAnswer === userAnswer;
        dispatch(setUserAnswer(userAnswer, calculation, isCorrect));
    }

    return (
        <>
            <span className={styles.counting}>{data.calculation}</span>
            <input className={classes.join(' ')} type="number" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandlerR(e)}/>
        </>
    )
}