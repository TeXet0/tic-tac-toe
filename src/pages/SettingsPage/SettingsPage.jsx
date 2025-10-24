import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SettingsContext } from '../../context/SettingsContext.jsx';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import styles from './SettingsPage.module.scss';
import { useNavigate, useParams, Navigate } from 'react-router-dom';

const SettingsPage = () => {
    const { settings, updateSettings } = useContext(SettingsContext);
    const navigate = useNavigate();
    const { playerId } = useParams();

    const isPlayerX = playerId === 'playerX';
    const isPlayerO = playerId === 'playerO';

    const currentPlayerName = isPlayerX ? settings.playerX : settings.playerO;

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            playerName: currentPlayerName
        }
    });

    useEffect(() => {
        setValue('playerName', currentPlayerName);
    }, [currentPlayerName, setValue]);


    const onSubmit = (data) => {
        const newName = data.playerName;

        if (isPlayerX) {
            updateSettings({ ...settings, playerX: newName });
        } else if (isPlayerO) {
            updateSettings({ ...settings, playerO: newName });
        }

        navigate('/');
    };

    const handleBack = () => {
        navigate('/');
    };

    if (!isPlayerX && !isPlayerO) {
        return <Navigate to="/" replace />;
    }

    const playerLabel = isPlayerX ? "Ім'я гравця X" : "Ім'я гравця O";

    return (
        <Layout>
            <div className={styles.settingsPage}>
                <h2 className={styles.title}>Налаштування гравця</h2>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    <div className={styles.formGroup}>
                        <label htmlFor="playerName">{playerLabel}</label>
                        <input
                            id="playerName"
                            {...register("playerName", { required: "Ім'я не може бути порожнім" })}
                        />
                        {errors.playerName && <p className={styles.error}>{errors.playerName.message}</p>}
                    </div>

                    <div className={styles.buttons}>
                        <Button type="submit">Зберегти</Button>
                        <Button type="button" onClick={handleBack}>Назад</Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default SettingsPage;