import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import { SettingsContext } from '../../context/SettingsContext.jsx';
import styles from './StartPage.module.scss';
import SettingsModal from '../../components/SettingsModal/SettingsModal';

const StartPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { settings } = useContext(SettingsContext);

    const handleStart = () => navigate('/game');
    const handleSettings = () => setIsModalOpen(true);

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
            </div>

            {isModalOpen && (
                <SettingsModal onClose={() => setIsModalOpen(false)} />
            )}
        </Layout>
    );
};

export default StartPage;