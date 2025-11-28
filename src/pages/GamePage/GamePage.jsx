import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/UI/Layout/Layout';
import Board from '../../components/Board/Board';
import Button from '../../components/UI/Button/Button';
import GameEndModal from '../../components/GameEndModal/GameEndModal';
import styles from './GamePage.module.scss';
import { useTicTacToe } from '../../hooks/useTicTacToe.js';
import { useGameStore } from '../../store/gameStore.js';

const GamePage = () => {
    const settings = useGameStore((state) => state.settings);
    const addResult = useGameStore((state) => state.addResult);

    const { board, winner, currentPlayer, handleClick, handleRestart } = useTicTacToe();
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    };

    const getWinnerInfo = () => {
        if (winner === 'Draw') {
            return { name: 'Нічия', color: '#4b5563' };
        }
        if (winner === 'X') {
            return settings.playerX;
        }
        if (winner === 'O') {
            return settings.playerO;
        }
        return null;
    };

    const winnerInfo = getWinnerInfo();
    useEffect(() => {
        if (winnerInfo) {
            addResult({
                winnerName: winnerInfo.name,
                color: winnerInfo.color,
                date: new Date().toISOString()
            });
        }
    }, [winnerInfo, addResult]);

    const currentPlayerName = currentPlayer === 'X'
        ? settings.playerX.name
        : settings.playerO.name;

    const status = winnerInfo
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

            {winnerInfo && (
                <GameEndModal
                    winnerName={winnerInfo.name}
                    onPlayAgain={handleRestart}
                    onGoHome={navigateHome}
                />
            )}
        </Layout>
    );
};

export default GamePage;