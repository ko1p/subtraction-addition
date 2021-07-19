export const setCalculations = (calculations: any[]) => { // TODO Убрать any
    return {
        type: "SET_CALCULATIONS",
        calculations
    }
}

export const hasEmptyInputs = (hasEmptyInputs: boolean) => {
    return {
        type: "HAS_EMPTY_INPUTS",
        hasEmptyInputs
    }
}

export const setUserAnswer = (userAnswer: number, calculation: string, isCorrect: boolean) => {
    return {
        type: "SET_USER_ANSWER",
        userAnswer,
        calculation,
        isCorrect
    }
}