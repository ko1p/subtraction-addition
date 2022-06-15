import React, {useEffect} from 'react';
import styles from './UserResults.module.css';
import {pointsCounter} from "../../utils/utils";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {resultsSlice} from "../../store/reducers/resultsSlice";
import {sendResultToRating} from "../../store/actions/results";

export const UserResults: React.FC = () => {
    const dispatch = useAppDispatch()
    const {login: userName} = useAppSelector(state => state.login);
    const {
        correctAnswers: correctAnswersNum,
        incorrectAnswers: inCorrectAnswersNum,
        startTime,
        finishTime,
        userPoints,
        isUserResultAdd: isResultAdd
    } = useAppSelector(state => state.results)
    const {setIsResultsShowed, setIsResultsTableShowed, setUserPoints} = resultsSlice.actions;

    const onClickHandler = () => {
        dispatch(setIsResultsShowed(false));
    }

    const addResultToRating = () => {
        dispatch(sendResultToRating({userName, userPoints}))
    }

    const showResultsTable = () => {
        dispatch(setIsResultsTableShowed(true))
    }

    useEffect(() => {
        if (startTime && finishTime) {
            dispatch(setUserPoints(pointsCounter(startTime, finishTime, correctAnswersNum)))
        }
    }, [dispatch, startTime, finishTime, correctAnswersNum, setUserPoints])

    return (
        <div className={styles.results}>
            <h2 className={styles.heading}>{userName} - Вы молодец!</h2>
            <p className={`${styles.info} ${styles.info_correct}`}>Верных ответов: {correctAnswersNum}</p>
            <p className={`${styles.info} ${styles.info_incorrect}`}>Неверных ответов: {inCorrectAnswersNum}</p>
            <p>Вы отвечали: {Math.floor((finishTime! - startTime!) / 1000)} сек.</p>
            <p>и набрали: {userPoints} очков</p>
            <p className={styles.link} onClick={showResultsTable}>🏆 посмотреть турнирную таблицу 🏆</p>
            <button className={styles.button} onClick={addResultToRating}
                    disabled={isResultAdd}>{isResultAdd ? 'Результат успешно добавлен' : 'Добавить результат в турнирную таблицу'}
            </button>
            <button className={styles.button} onClick={onClickHandler}>Вернуться к подсчётам</button>
        </div>
    )
}
