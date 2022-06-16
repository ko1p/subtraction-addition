export interface ICountingProps {
    key: string,
    data: ICalculation,
}

export interface ICalculation {
    calculation: string,
    rightAnswer: number,
    userAnswer: string,
    isCorrect: boolean
}


export interface IUsersResults {
    name: string,
    result: number
}
