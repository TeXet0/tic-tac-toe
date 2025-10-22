import React from 'react';
import Layout from '../../components/UI/Layout/Layout.jsx';
import Button from '../../components/UI/Button/Button.jsx';
import styles from './StartPage.module.scss';

const StartPage = ({ onStartGame }) => {
    return (
        <Layout>
            <div className={styles.startPage}>
                <h2>Вітаємо у грі!</h2>

                <Button onClick={onStartGame}>
                    Почати гру
                </Button>
            </div>
        </Layout>
    );
};

export default StartPage;