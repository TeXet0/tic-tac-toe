import React from 'react';
import { useGameStore } from '../../store/gameStore.js';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import styles from './ResultsTablePage.module.scss';

const ResultsTablePage = () => {
    const results = useGameStore((state) => state.results);
    const clearResults = useGameStore((state) => state.clearResults);
    const navigate = useNavigate();

    return (
        <Layout>
            <div className={styles.resultsPage}>
                <h2 className={styles.title}>Таблиця Результатів</h2>
                {results.length > 0 ? (
                    <>
                        <table className={styles.table}>
                            <thead>
                            <tr>
                                <th>Переможець</th>
                                <th>Дата</th>
                            </tr>
                            </thead>
                            <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td
                                        style={{ color: result.color, fontWeight: 'bold' }}
                                    >
                                        {result.winnerName}
                                    </td>
                                    <td>{new Date(result.date).toLocaleString()}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <div className={styles.buttons}>
                            <Button onClick={clearResults}>Очистити історію</Button>
                            <Button onClick={() => navigate('/')}>На головну</Button>
                        </div>
                    </>
                ) : (
                    <>
                        <p>Історія ігор порожня.</p>
                        <Button onClick={() => navigate('/')}>На головну</Button>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default ResultsTablePage;