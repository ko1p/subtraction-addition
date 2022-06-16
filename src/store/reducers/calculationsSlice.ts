import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICalculation} from "../../interfaces";

interface CalcutalitonsState {
    calculationsList: ICalculation[],
    hasEmptyInputs: boolean,
}

const initialState: CalcutalitonsState = {
    calculationsList: [],
    hasEmptyInputs: false,
}

export const calculationsSlice = createSlice({
    name: 'calculations',
    initialState,
    reducers: {
        setCalculations(state, action: PayloadAction<ICalculation[]>) {
            state.calculationsList = action.payload
        },
        setIsAllInputsFilled(state, action: PayloadAction<boolean>) {
            state.hasEmptyInputs = action.payload
        },
        setUserAnswer(state, action: PayloadAction<any>) {
            const newCalculationList = state.calculationsList.map((calcItem: ICalculation) => {
                if (calcItem.calculation === action.payload.calculation) {
                    calcItem.userAnswer = action.payload.userAnswer;
                    calcItem.isCorrect = action.payload.isCorrect
                }
                return calcItem
            })
            state.calculationsList = newCalculationList;
        },
    },
    extraReducers: {}
})

export default calculationsSlice.reducer;
