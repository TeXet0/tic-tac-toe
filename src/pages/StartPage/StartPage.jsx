import React from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import styles from './StartPage.module.scss';


const StartPage = ({ onStartGame, onGoToSettings }) => {
    return (
        <Layout>
            <div className={styles.startPage}>
                <h2>Вітаємо у грі!</h2>

                <div className={styles.buttonGroup}>
                    <Button onClick={onStartGame}>
                        Почати гру
                    </Button>
                    <Button onClick={onGoToSettings}>
                        Налаштування
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default StartPage;