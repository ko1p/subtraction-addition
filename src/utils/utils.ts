const randomNum = () => {
    return Math.floor(Math.random() * 100);
}

const randomCalculation = () => {
    const isAddition = Math.random() > 0.5;
    const numberOne = randomNum();
    const numberTwo = randomNum();

    if (isAddition) {
        return {
            calculation: `${numberOne} + ${numberTwo} =`,
            rightAnswer: numberOne + numberTwo,
            userAnswer: '',
            isCorrect: false
        }
    } else {
        return {
            calculation: `${numberOne} - ${numberTwo} =`,
            rightAnswer: numberOne - numberTwo,
            userAnswer: '',
            isCorrect: false
        }
    }
}

export const calcExamples = (num: number) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomCalculation())
    }
    return arr;
}

export const getCurrentTime = (): number => {
    return Date.now();
}

export const pointsCounter = (startTime: number, finishTime: number, rightAnswers: number): number => {
    return Math.floor((rightAnswers / (finishTime - startTime)) * 1_000_000);
}