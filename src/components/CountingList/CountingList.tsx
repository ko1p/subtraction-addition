import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import styles from "./CountingList.module.css";
import {Counting} from "../Counting/Counting";
import {calcExamples, getCurrentTime} from "../../utils/utils";
import {calculationsSlice} from "../../store/reducers/calculationsSlice";
import {resultsSlice} from "../../store/reducers/resultsSlice";

import {useAppSelector, useAppDispatch} from "../../hooks/redux";

const CountingList: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {login} = useAppSelector(store => store.login);
    const {calculationsList: calculations, hasEmptyInputs: isInputsEmpty} = useAppSelector(store => store.calculations);
    const {setCalculations, setIsAllInputsFilled} = calculationsSlice.actions;
    const {
        setStartTime,
        setIsResultsShowed,
        setFinishTime,
        setIsResultsTouched,
        setNumberOfIncorrectAnwsers,
        setNumberOfCorrectAnwsers
    } = resultsSlice.actions;

    useEffect(() => {
        if (login === '') {
            navigate('/');
        }
    }, [login, navigate])

    useEffect(() => {
        dispatch(setCalculations(calcExamples(10)));
    }, [dispatch, setCalculations]);

    useEffect(() => {
        dispatch(setStartTime(getCurrentTime()))
    }, [dispatch, setStartTime])

    const userAnswerChecker = () => {
        const noEmptyInputs = calculations.every((item) => item.userAnswer !== '');

        if (!noEmptyInputs) {
            dispatch(setIsAllInputsFilled(true));
            dispatch(setIsResultsShowed(false));
        } else {
            dispatch(setFinishTime(getCurrentTime()));
            dispatch(setIsAllInputsFilled(false));
            dispatch(setIsResultsShowed(true));
            dispatch(setIsResultsTouched(true));
            userCorrectAnswersCounter();
        }
    };

    const userCorrectAnswersCounter = () => {
        let correctAnswersCounter = 0;
        let inCorrectAnswersCounter = 0;
        calculations.forEach((item) => {
            if (+item.userAnswer === item.rightAnswer) {
                correctAnswersCounter += 1;
            } else {
                inCorrectAnswersCounter += 1;
            }
        });
        dispatch(setNumberOfCorrectAnwsers(correctAnswersCounter));
        dispatch(setNumberOfIncorrectAnwsers(inCorrectAnswersCounter));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Сложение и вычитание с чисел от 0 до 100.
            </h2>
            <p className={styles.subtitle}>
                Укажите ответы для каждого из 10 примеров.
            </p>
            {calculations.map((item, index) => (
                <Counting key={`counting-${index}`} data={item}/>
            ))}
            <button className={styles.button} onClick={userAnswerChecker}>
                Далее
            </button>
            {isInputsEmpty && <span className={styles.error}>Заполните все поля</span>}
        </div>
    );
};

export default CountingList;
