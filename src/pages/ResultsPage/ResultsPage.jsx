import React from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import styles from './ResultsPage.module.scss';

const ResultsPage = ({ winner, onRestart }) => {

    const resultMessage = winner === 'Draw'
        ? 'Гра завершилась внічию!'
        : `Переможець: ${winner}!`;

    return (
        <Layout>
            <div className={styles.resultsPage}>
                <h2>Гра завершена!</h2>

                <p className={styles.winner}>{resultMessage}</p>

                <Button onClick={onRestart}>
                    Грати знову
                </Button>
            </div>
        </Layout>
    );
};

export default ResultsPage;