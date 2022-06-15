import React from 'react';
import styles from './Results.module.css';
import {ResultsTable} from "../ResultsTable/ResultsTable";
import {UserResults} from "../UserResults/UserResults";
import {useAppSelector} from "../../hooks/redux";

export const Results: React.FC = () => {
    const {isResultsTableShowed} = useAppSelector(state => state.results);

    return (
        <div className={styles.popup}>
            {!isResultsTableShowed && <UserResults/>}
            {isResultsTableShowed && <ResultsTable/>}
        </div>
    )
}
