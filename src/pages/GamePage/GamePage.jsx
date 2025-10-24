import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/UI/Layout/Layout';
import Board from '../../components/Board/Board';
import Button from '../../components/UI/Button/Button';
import GameEndModal from '../../components/GameEndModal/GameEndModal';
import styles from './GamePage.module.scss';
import { useTicTacToe } from '../../hooks/useTicTacToe.js';
import { SettingsContext } from '../../context/SettingsContext.jsx';

const GamePage = () => {
    const { settings } = useContext(SettingsContext);
    const { board, winner, currentPlayer, handleClick, handleRestart } = useTicTacToe();

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    const getWinnerName = () => {
        if (winner === 'Draw') return 'Draw';
        if (winner === 'X') return settings.playerX.name;
        if (winner === 'O') return settings.playerO.name;
        return null;
    };

    const winnerName = getWinnerName();

    const currentPlayerName = currentPlayer === 'X'
        ? settings.playerX.name
        : settings.playerO.name;

    const status = winnerName
        ? `Гра завершена!`
        : `Наступний хід: ${currentPlayerName} (${currentPlayer})`;

    return (
        <Layout>
            <div className={styles.gamePage}>
                <div className={styles.status}>{status}</div>
                <Board squares={board} onSquareClick={handleClick} />
                <div className={styles.restartButton}>
                    <Button onClick={handleRestart}>Скинути гру</Button>
                </div>
            </div>

            {winnerName && (
                <GameEndModal
                    winnerName={winnerName}
                    onPlayAgain={handleRestart}
                    onGoHome={navigateHome}
                />
            )}
        </Layout>
    );
};

export default GamePage;