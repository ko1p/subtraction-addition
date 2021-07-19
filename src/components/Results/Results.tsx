import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsResultsShowed } from '../../store/actions/results'
import styles from './Results.module.css';

import { ILoginState, IResultsState } from '../../interfaces'

export const Results: React.FC = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state: ILoginState) => state.login.login);
    const correctAnswersNum = useSelector((state: IResultsState) => state.results.correctAnswers);
    const inCorrectAnswersNum = useSelector((state: IResultsState) => state.results.incorrectAnswers);
    
    const onClickHandler = () => {
        dispatch(setIsResultsShowed(false));
    }

    return (
        <div className={styles.popup}>
            <div className={styles.results}>
                <h2 className={styles.heading}>{userName} - Вы молодец!</h2>
                <p className={`${styles.info} ${styles.info_correct}`}>Верных ответов: {correctAnswersNum}</p>
                <p className={`${styles.info} ${styles.info_incorrect}`}>Неверных ответов: {inCorrectAnswersNum}</p>
                <button className={styles.button} onClick={onClickHandler}>Вернуться к подсчётам</button>
            </div>
        </div>
    )
}