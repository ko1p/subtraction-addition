export interface ICalculation {
    calculation: string,
    rightAnswer: number,
    userAnswer: string,
    isCorrect: boolean
}

export interface ICalculationList {
    calculations: {
        calculationsList: Array<ICalculation>
    }
}

export interface ICalculationsState {
    calculations: {
        calculationsList: ICalculation,
        hasEmptyInputs: boolean
    }
}

export interface IResultsState {
    results: {
        correctAnswers: number,
        incorrectAnswers: number,
        isResultsShowed: boolean,
        isResultsTouched: boolean,
        startTime: number,
        finishTime: number,
        userPoints: number,
        isResultsTableShowed: boolean,
        topResults: any[] // TODO создать тип,
        isUserResultAdd: boolean
    }
}

export interface ILoginState {
    login: {
        login: string
        isValid: boolean
        isTouched: false
    }
}

export interface ICountingProps {
    key: string,
    data: ICalculation,
}

export interface IUsersResults {
    name: string,
    result: number
}