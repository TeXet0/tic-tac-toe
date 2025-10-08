import React from 'react';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import styles from './StartPage.module.scss';

const StartPage = () => {
    return (
        <Layout>
            <div className={styles.startPage}>
                <h2>Вітаємо у грі!</h2>
                <Button>Почати гру</Button>
            </div>
        </Layout>
    );
};

export default StartPage;