import React, {useEffect} from "react";
import {useNavigate} from "react-router";
// import { Navigate } from "react-router-dom";
import styles from "./CountingList.module.css";
import {Counting} from "../Counting/Counting";
// import {Results} from "../Results/Results";
import {calcExamples, getCurrentTime} from "../../utils/utils";
// import {useSelector} from "react-redux";
// import {setCalculations, hasEmptyInputs} from "../../store/actions/calculations";
// import {
//     setCorrectAnswers, setFinishTime,
//     setIncorrectAnswers,
//     setIsResultsShowed,
//     setIsResultsTouched, setStartTime
// } from '../../store/actions/results';
import { calculationsSlice } from "../../store/reducers/calculationsSlice";
import { resultsSlice } from "../../store/reducers/resultsSlice";

import {ICalculationList, ILoginState, ICalculationsState, IResultsState} from "../../interfaces";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";

const CountingList: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { login } = useAppSelector(store => store.login);
    const { calculationsList: calculations, hasEmptyInputs: isInputsEmpty  } = useAppSelector(store => store.calculations);
    const { isResultsShowed } = useAppSelector(store => store.results);
    const { setCalculations, setIsAllInputsFilled } = calculationsSlice.actions;
    const { setStartTime, setIsResultsShowed, setFinishTime, setIsResultsTouched, setNumberOfIncorrectAnwsers, setNumberOfCorrectAnwsers } = resultsSlice.actions;
    // const login = useSelector((state: ILoginState) => state.login.login);
    // const calculations = useSelector((state: ICalculationList) => state.calculations.calculationsList);
    // const isInputsEmpty = useSelector((state: ICalculationsState) => state.calculations.hasEmptyInputs);
    // const isResultsShowed = useSelector((state: IResultsState) => state.results.isResultsShowed);


    useEffect(() => {
    if (login === '') {
         navigate('/');
        }
    }, [])

    useEffect(() => {
        dispatch(setCalculations(calcExamples(10)));
    }, [dispatch]);

    useEffect(() => {
        dispatch(setStartTime(getCurrentTime()))
    }, [dispatch])

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
            {/*{!isInputsEmpty && isResultsShowed && (*/}
            {/*    <Results/>                */}
            {/*)}*/}
        </div>
    );
};

export default CountingList;
