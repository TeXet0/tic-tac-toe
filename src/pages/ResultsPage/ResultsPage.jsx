import React from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import styles from './ResultsPage.module.scss';

const ResultsPage = () => {

    const winner = 'X';

    return (
        <Layout>
            <div className={styles.resultsPage}>
                <h2>Гра завершена!</h2>
                <p className={styles.winner}>Переможець: {winner}</p>
                <Button>Грати знову</Button>
            </div>
        </Layout>
    );
};

export default ResultsPage;