import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    sendResultToRating,
    setIsResultsShowed,
    setUserPoints,
    toggleResultsTable
} from '../../store/actions/results';
import styles from './UserResults.module.css';

import {ILoginState, IResultsState} from '../../interfaces'
import {pointsCounter} from "../../utils/utils";

export const UserResults: React.FC = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state: ILoginState) => state.login.login);
    const correctAnswersNum = useSelector((state: IResultsState) => state.results.correctAnswers);
    const inCorrectAnswersNum = useSelector((state: IResultsState) => state.results.incorrectAnswers);
    const startTime = useSelector((state: IResultsState) => state.results.startTime);
    const finishTime = useSelector((state: IResultsState) => state.results.finishTime);
    const userPoints = useSelector((state: IResultsState) => state.results.userPoints);
    const isResultAdd = useSelector((state: IResultsState) => state.results.isUserResultAdd);

    const onClickHandler = () => {
        dispatch(setIsResultsShowed(false));
    }

    const addResultToRating = () => {
        dispatch(sendResultToRating(userName, userPoints))
    }

    const showResultsTable = () => {
        dispatch(toggleResultsTable(true))
    }

    useEffect(() => {
        dispatch(setUserPoints(pointsCounter(startTime, finishTime, correctAnswersNum)))
    }, [dispatch, startTime, finishTime, correctAnswersNum])

    return (
        <div className={styles.results}>
            <h2 className={styles.heading}>{userName} - Вы молодец!</h2>
            <p className={`${styles.info} ${styles.info_correct}`}>Верных ответов: {correctAnswersNum}</p>
            <p className={`${styles.info} ${styles.info_incorrect}`}>Неверных ответов: {inCorrectAnswersNum}</p>
            <p>Вы отвечали: {Math.floor((finishTime - startTime) / 1000)} сек.</p>
            <p>и набрали: {userPoints} очков</p>
            <p className={styles.link} onClick={showResultsTable}>🏆 посмотреть турнирную таблицу 🏆</p>
            <button className={styles.button} onClick={addResultToRating} disabled={isResultAdd}>Добавить результат в турнирную таблицу
            </button>
            <button className={styles.button} onClick={onClickHandler}>Вернуться к подсчётам</button>
        </div>
    )
}