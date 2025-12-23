import React, { useContext } from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Board from '../../components/Board/Board';
import Button from '../../components/UI/Button/Button';
import styles from './GamePage.module.scss';
import { useTicTacToe } from '../../hooks/useTicTacToe';
import { SettingsContext } from '../../context/SettingsContext.jsx';
import GameEndModal from '../../components/GameEndModal/GameEndModal';

const GamePage = ({ onGoHome }) => {
    const { settings } = useContext(SettingsContext);

    const {
        board,
        winner,
        currentPlayer,
        handleClick,
        handleRestart
    } = useTicTacToe();

    const getName = (player) => {
        return player?.name || player;
    };

    const getWinnerResult = () => {
        if (winner === 'Draw') return 'Draw';
        if (winner === 'X') return getName(settings.playerX);
        if (winner === 'O') return getName(settings.playerO);
        return null;
    };

    const winnerName = getWinnerResult();

    const currentPlayerName = currentPlayer === 'X'
        ? getName(settings.playerX)
        : getName(settings.playerO);

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

            <GameEndModal
                isOpen={!!winnerName}
                winnerName={winnerName}
                onPlayAgain={handleRestart}
                onGoHome={onGoHome}
            />
        </Layout>
    );
};

export default GamePage;