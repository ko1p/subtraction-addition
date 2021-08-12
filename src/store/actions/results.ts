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