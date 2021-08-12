import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setIsResultsShowed, setUserPoints} from '../../store/actions/results';
import styles from './Results.module.css';
import db from '../../firebase/firebase';

import {ILoginState, IResultsState} from '../../interfaces'
import {pointsCounter} from "../../utils/utils";

export const Results: React.FC = () => {
    const dispatch = useDispatch();
    const userName = useSelector((state: ILoginState) => state.login.login);
    const correctAnswersNum = useSelector((state: IResultsState) => state.results.correctAnswers);
    const inCorrectAnswersNum = useSelector((state: IResultsState) => state.results.incorrectAnswers);
    const startTime = useSelector((state: IResultsState) => state.results.startTime);
    const finishTime = useSelector((state: IResultsState) => state.results.finishTime);
    const userPoints = useSelector((state: IResultsState) => state.results.userPoints);

    const onClickHandler = () => {
        dispatch(setIsResultsShowed(false));
    }

    const addResultToRating = () => {
        db.collection("results").add({
            name: userName,
            result: userPoints
        })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    useEffect(() => {
        dispatch(setUserPoints(pointsCounter(startTime, finishTime, correctAnswersNum)))
    }, [dispatch, startTime, finishTime, correctAnswersNum])

    return (
        <div className={styles.popup}>
            <div className={styles.results}>
                <h2 className={styles.heading}>{userName} - Вы молодец!</h2>
                <p className={`${styles.info} ${styles.info_correct}`}>Верных ответов: {correctAnswersNum}</p>
                <p className={`${styles.info} ${styles.info_incorrect}`}>Неверных ответов: {inCorrectAnswersNum}</p>
                <p>Вы отвечали: {Math.floor((finishTime - startTime)/1000)} сек.</p>
                <p>и набрали: {userPoints} очков</p>
                <button className={styles.button} onClick={addResultToRating}>Добавить результат в турнирную таблицу
                </button>
                <button className={styles.button} onClick={onClickHandler}>Вернуться к подсчётам</button>
            </div>
        </div>
    )
}