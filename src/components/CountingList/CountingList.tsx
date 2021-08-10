import React, {useEffect} from "react";
import {useHistory} from "react-router";
import styles from "./CountingList.module.css";
import {Counting} from "../Counting/Counting";
import {Results} from "../Results/Results";
import {calcExamples} from "../../utils/calculations";
import {useSelector, useDispatch} from "react-redux";
import {setCalculations, hasEmptyInputs} from "../../store/actions/calculations";
import {
    setCorrectAnswers,
    setIncorrectAnswers,
    setIsResultsShowed,
    setIsResultsTouched
} from '../../store/actions/results';

import {ICalculationList, ILoginState, ICalculationsState, IResultsState} from "../../interfaces";

const CountingList: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const login = useSelector((state: ILoginState) => state.login.login);
    const calculations = useSelector((state: ICalculationList) => state.calculations.calculationsList);
    const isInputsEmpty = useSelector((state: ICalculationsState) => state.calculations.hasEmptyInputs);
    const isResultsShowed = useSelector((state: IResultsState) => state.results.isResultsShowed);

    if (login === '') {
        history.push('/');
    }

    useEffect(() => {
        dispatch(setCalculations(calcExamples(10)));
    }, [dispatch]);

    const userAnswerChecker = () => {
        const noEmptyInputs = calculations.every((item) => item.userAnswer !== '');

        if (!noEmptyInputs) {
            dispatch(hasEmptyInputs(true));
            dispatch(setIsResultsShowed(false));
        } else {
            dispatch(hasEmptyInputs(false));
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
        dispatch(setCorrectAnswers(correctAnswersCounter)); // TODO подумать об оптимизации
        dispatch(setIncorrectAnswers(inCorrectAnswersCounter));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Сложение и вычитание с чисел от 0 до 100.
            </h2>
            <p className={styles.subtitle}>
                Решите и укажите ответы для каждого из 10 примеров.
            </p>
            {calculations.map((item, index) => (
                <Counting key={`counting-${index}`} data={item}/>
            ))}
            <button className={styles.button} onClick={userAnswerChecker}>
                Далее
            </button>
            {isInputsEmpty && <span className={styles.error}>Заполните все поля</span>}
            {!isInputsEmpty && isResultsShowed && (
                <Results/>
            )}
        </div>
    );
};

export default CountingList;
