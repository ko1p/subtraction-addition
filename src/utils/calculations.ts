const randomNum = () => {
	return Math.floor(Math.random()*100);
}

const randomCalculation = () => {
	const isAddition = Math.random() > 0.5 ? true : false;
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