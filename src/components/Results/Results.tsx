import React from 'react';
import ReactDOM from "react-dom";
import styles from './Results.module.css';
import {ResultsTable} from "../ResultsTable/ResultsTable";
import {UserResults} from "../UserResults/UserResults";
import {useAppSelector} from "../../hooks/redux";

export const Results: React.FC = () => {
    const {isResultsTableShowed} = useAppSelector(state => state.results);

    return ReactDOM.createPortal(
        <div className={styles.popup}>
            {!isResultsTableShowed && <UserResults/>}
            {isResultsTableShowed && <ResultsTable/>}
        </div>,
        document.getElementById("modal") as HTMLElement
    )
}
