import React, { useState } from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Board from '../../components/Board/Board';
import styles from './GamePage.module.scss';

const GamePage = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');

    return (
        <Layout>
            <div className={styles.gamePage}>
                <div className={styles.status}>
                    Наступний хід: {currentPlayer}
                </div>
                <Board />
            </div>
        </Layout>
    );
};

export default GamePage;