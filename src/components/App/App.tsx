import React from "react";
import {Routes, Route} from "react-router-dom";
import styles from "./App.module.css";
import {PageNotFound} from '../PageNotFound/PageNotFound';
import Login from '../Login/Login';
import CountingList from "../CountingList/CountingList";
import {Results} from "../Results/Results";
import {useAppSelector} from "../../hooks/redux";

const App: React.FC = () => {
    const {hasEmptyInputs: isInputsEmpty} = useAppSelector(store => store.calculations);
    const {isResultsShowed} = useAppSelector(store => store.results);
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/counting" element={<CountingList/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            {
                !isInputsEmpty && isResultsShowed && (
                    <Results/>
                )
            }
        </div>
    );
};

export default App;
