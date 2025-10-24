import React, { useContext } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { SettingsContext } from '../../context/SettingsContext.jsx';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
    const { settings } = useContext(SettingsContext);
    const { playerId } = useParams();
    const navigate = useNavigate();

    let playerInfo;

    if (playerId === 'playerX') {
        playerInfo = settings.playerX;
    } else if (playerId === 'playerO') {
        playerInfo = settings.playerO;
    } else {
        return <Navigate to="/" replace />;
    }

    return (
        <Layout>
            <div className={styles.profileCard}>
                <h2 className={styles.name} style={{ color: playerInfo.color }}>
                    {playerInfo.name}
                </h2>
                <p>Профіль гравця</p>
                <div
                    className={styles.colorPreview}
                    style={{ backgroundColor: playerInfo.color }}
                />
                <p>Колір гравця: {playerInfo.color}</p>
                <Button onClick={() => navigate('/')}>На головну</Button>
            </div>
        </Layout>
    );
};

export default ProfilePage;