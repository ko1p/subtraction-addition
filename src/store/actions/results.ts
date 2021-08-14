import db from "../../firebase/firebase";
import {Dispatch} from 'redux';

export const setCorrectAnswers = (correctAnswers: number) => {
    return {
        type: "SET_CORRECT_ANSWERS_NUM",
        correctAnswers
    }
}

export const setIncorrectAnswers = (incorrectAnswers: number) => {
    return {
        type: "SET_INCORRECT_ANSWERS_NUM",
        incorrectAnswers
    }
}

export const setIsResultsShowed = (isResultsShowed: boolean) => {
    return {
        type: "SET_IS_RESULTS_SHOWED",
        isResultsShowed
    }
}

export const setIsResultsTouched = (isResultsTouched: boolean) => {
    return {
        type: "SET_IS_RESULTS_TOUCHED",
        isResultsTouched
    }
}

export const setStartTime = (startTime: number) => {
    return {
        type: "SET_START_TIME",
        startTime
    }
}

export const setFinishTime = (finishTime: number) => {
    return {
        type: "SET_FINISH_TIME",
        finishTime
    }
}

export const setUserPoints = (userPoints: number) => {
    return {
        type: "SET_USER_POINTS",
        userPoints
    }
}

export const toggleResultsTable = (isResultsTableShowed: boolean) => {
    return {
        type: "SET_IS_RESULT_TABLE_SHOWED",
        isResultsTableShowed
    }
}

export const setTopResults = (data: any[]) => { // TODO добавить тип
    return {
        type: "SET_TOP_RESULTS",
        data
    }
}

export const getTopResults = () => {
    return async (dispatch: Dispatch) => { //TODO подумать
        try {
            db.collection("results").get().then((querySnapshot) => {
                const data: any[] = []; // TODO: Убрать, сделать интерфейс
                querySnapshot.forEach((doc) => {
                    data.push(doc.data())
                });
                const sortedTopTen = data.sort((a, b) => b.result - a.result).slice(0, 10);
                dispatch(setTopResults(sortedTopTen))
            });
        } catch (e) {
            console.log(e, "произошла ошибка при загрузке списка лучших результатов")
        }
    }
}

export const setIsUserResultAdd = (isUserResultAdd: boolean) => {
    return {
        type: "SET_IS_USER_RESULT_ADD",
        isUserResultAdd
    }
}