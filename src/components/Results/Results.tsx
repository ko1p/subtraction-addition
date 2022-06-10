import React from 'react';
import styles from './Results.module.css';
import {ResultsTable} from "../ResultsTable/ResultsTable";
import {UserResults} from "../UserResults/UserResults";

// import {IResultsState} from '../../interfaces';
import {useAppSelector} from "../../hooks/redux";

export const Results: React.FC = () => {
    const { isResultsTableShowed } = useAppSelector(state => state.results);

    return (
        <div className={styles.popup}>
            {!isResultsTableShowed && <UserResults/>}
            {isResultsTableShowed && <ResultsTable/>}
            {/*{!isResultsTableShowed && <h1>ЮЗЕР РЕЗАЛТ</h1>}*/}
            {/*{isResultsTableShowed && <h1>ОЛЛ РЕЗАЛТС</h1>}*/}
        </div>
    )
}
