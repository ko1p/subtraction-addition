import React from "react";
// import {setUserAnswer} from '../../store/actions/calculations';
import styles from './Counting.module.css';

import {ICountingProps} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {calculationsSlice} from "../../store/reducers/calculationsSlice";

export const Counting: React.FC<ICountingProps> = ({data}) => {
    const dispatch = useAppDispatch();
    const { isResultsTouched } = useAppSelector(store => store.results)
    const isCorrectAnswer = data.isCorrect;
    const { setUserAnswer } = calculationsSlice.actions;

    let classes = [styles.input];

    if (isCorrectAnswer && isResultsTouched) {
        classes.push(styles.input_correct);
    }
    if (!isCorrectAnswer && isResultsTouched) {
        classes.push(styles.input_incorrect);
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const userAnswer = +e.target.value;
        const calculation = data.calculation;
        const isCorrect = data.rightAnswer === userAnswer;
        dispatch(setUserAnswer({userAnswer, calculation, isCorrect}));
    }

    return (
        <div className={styles.container}>
            <span className={styles.counting}>{data.calculation}</span>
            <input className={classes.join(' ')} type="number"
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}/>
        </div>
    )
}
