import React from 'react';
import {useSelector} from 'react-redux';
import styles from './Results.module.css';
import {ResultsTable} from "../ResultsTable/ResultsTable";
import {UserResults} from "../UserResults/UserResults";

import {IResultsState} from '../../interfaces';

export const Results: React.FC = () => {
    const isResultsTableShowed = useSelector((state: IResultsState) => state.results.isResultsTableShowed);

    return (
        <div className={styles.popup}>
            {!isResultsTableShowed && <UserResults/>}
            {isResultsTableShowed && <ResultsTable/>}
        </div>
    )
}