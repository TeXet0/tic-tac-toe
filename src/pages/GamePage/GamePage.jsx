import React from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Board from '../../components/Board/Board';
import Button from '../../components/UI/Button/Button';
import styles from './GamePage.module.scss';
import { useTicTacToe } from '../../hooks/useTicTacToe';

const GamePage = ({ onGameEnd }) => {
    const {
        board,
        winner,
        currentPlayer,
        handleClick,
        handleRestart
    } = useTicTacToe();

    const status = winner
        ? (winner === 'Draw' ? 'Нічия!' : `Переможець: ${winner}`)
        : `Наступний хід: ${currentPlayer}`;

    React.useEffect(() => {
        if (winner) {
            onGameEnd(winner);
        }
    }, [winner, onGameEnd]);

    return (
        <Layout>
            <div className={styles.gamePage}>
                <div className={styles.status}>{status}</div>

                <Board squares={board} onSquareClick={handleClick} />

                <div className={styles.restartButton}>
                    <Button onClick={handleRestart}>Почати знову</Button>
                </div>
            </div>
        </Layout>
    );
};

export default GamePage;