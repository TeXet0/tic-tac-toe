import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import styles from './StartPage.module.scss';
import SettingsModal from '../../components/SettingsModal/SettingsModal';
import { useGameStore } from '../../store/gameStore.js';

const StartPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const settings = useGameStore((state) => state.settings);

    const handleStart = () => navigate('/game');
    const handleSettings = () => setIsModalOpen(true);
    const handleResults = () => navigate('/results');

    return (
        <Layout>
            <div className={styles.startPage}>
                <h2 className={styles.title}>Вітаємо у грі!</h2>
                <div className={styles.profileLinks}>
                    Профілі гравців:
                    <Link
                        to="/player/playerX"
                        className={styles.profileLink}
                        style={{ color: settings.playerX.color }}
                    >
                        {settings.playerX.name}
                    </Link>
                    <span> | </span>
                    <Link
                        to="/player/playerO"
                        className={styles.profileLink}
                        style={{ color: settings.playerO.color }}
                    >
                        {settings.playerO.name}
                    </Link>
                </div>

                <div className={styles.buttonGroup}>
                    <Button onClick={handleStart}>Почати гру</Button>
                    <Button onClick={handleSettings}>Налаштування</Button>
                </div>

                <div className={styles.resultsLink}>
                    <a href="/results" onClick={(e) => { e.preventDefault(); handleResults(); }}>
                        Переглянути історію ігор
                    </a>
                </div>
            </div>

            {isModalOpen && (
                <SettingsModal onClose={() => setIsModalOpen(false)} />
            )}
        </Layout>
    );
};

export default StartPage;