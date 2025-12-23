import Modal from '../Modal/Modal';
import Button from '../UI/Button/Button';
import styles from './GameEndModal.module.scss';

const GameEndModal = ({ isOpen, winnerName, onPlayAgain, onGoHome }) => {
    const message = winnerName === 'Draw'
        ? 'Нічия'
        : `Переможець: ${winnerName}!`;

    return (
        <Modal isOpen={isOpen} onClose={onGoHome}>
            <div className={styles.content}>
                <h2>Гру закінчено!</h2>
                <p className={styles.winner}>{message}</p>
                <div className={styles.buttons}>
                    <Button onClick={onPlayAgain}>
                        Грати знову
                    </Button>
                    <Button onClick={onGoHome}>
                        Вийти в меню
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default GameEndModal;