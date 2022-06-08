import React, {useEffect} from 'react';
import styles from './ResultsTable.module.css';
// import {getTopResults, toggleResultsTable} from "../../store/actions/results";
// import {useDispatch, useSelector} from "react-redux";
// import {IResultsState} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {resultsSlice} from "../../store/reducers/resultsSlice";
import { getTopResults } from '../../store/actions/resultsAction';

export const ResultsTable: React.FC = () => {
    // const dispatch = useDispatch();
    // const topResults = useSelector((state: IResultsState) => state.results.topResults);
    const dispatch = useAppDispatch();
    const { topResults } = useAppSelector(state => state.results)
    const { setIsResultsTableShowed } = resultsSlice.actions;

    const showResultsTable = () => {
        dispatch(setIsResultsTableShowed(false))
    }

    useEffect(() => {
        dispatch(getTopResults())
    }, [dispatch])

    return (
        <div className={styles.results}>
            <h2>🏆 Топ-10 результатов: 🏆</h2>
            {topResults.length ?
                <table className={styles.table}>
                    <thead className={styles.thead}>
                    <tr>
                        <td>Имя:</td>
                        <td>Очков:</td>
                    </tr>
                    </thead>
                    <tbody>
                    {topResults && topResults.map((member, index) => {
                        return (
                            <tr key={`tr-${index}`}>
                                <td>{member.name} {(index === 0 && '🥇') || (index === 1 && '🥈') || (index === 2 && '🥉')}</td>
                                <td>{member.result}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                :
                <div className={styles.lds_dual_ring} />
            }
            <button className={styles.button} onClick={showResultsTable}>обратно</button>
        </div>
    )
}
