import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../UI/Button/Button';
import styles from './GameEndModal.module.scss';

const modalRoot = document.getElementById('modal-root');

const GameEndModal = ({ winnerName, onPlayAgain, onGoHome }) => {
    const message = winnerName === 'Draw'
        ? 'Гра завершилась внічию!'
        : `Переможець: ${winnerName}!`;

    const modalContent = (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Гра завершена!</h2>
                <p className={styles.winner}>{message}</p>
                <div className={styles.buttons}>
                    <Button onClick={onPlayAgain}>Грати цей тур заново</Button>
                    <Button onClick={onGoHome}>Вийти в меню</Button>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, modalRoot);
};

export default GameEndModal;