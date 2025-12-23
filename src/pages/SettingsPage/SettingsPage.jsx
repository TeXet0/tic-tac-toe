import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { SettingsContext } from '../../context/SettingsContext.jsx';
import Layout from '../../components/UI/Layout/Layout';
import Button from '../../components/UI/Button/Button';
import styles from './SettingsPage.module.scss';

const SettingsPage = ({ onBack }) => {
    const { settings, updateSettings } = useContext(SettingsContext);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: settings
    });

    const onSubmit = (data) => {
        updateSettings(data);
        onBack();
    };

    return (
        <Layout>
            <div className={styles.settingsPage}>
                <h2>Налаштування гри</h2>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    <div className={styles.formGroup}>
                        <label htmlFor="playerX">Ім'я гравця X</label>
                        <input
                            id="playerX"
                            {...register("playerX", {
                                required: "Ім'я не може бути порожнім",
                                validate: {
                                    notOnlySpaces: (value) => (value || "").trim().length > 0 || "Ім'я не може складатися тільки з пробілів",
                                    validCharacters: (value) => /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9\s]+$/.test(value) || "Ім'я може містити тільки літери, цифри та пробіли"
                                }
                            })}
                        />
                        {errors.playerX && <p className={styles.error}>{errors.playerX.message}</p>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="playerO">Ім'я гравця O</label>
                        <input
                            id="playerO"
                            {...register("playerO", {
                                required: "Ім'я не може бути порожнім",
                                validate: {
                                    notOnlySpaces: (value) => (value || "").trim().length > 0 || "Ім'я не може складатися тільки з пробілів",
                                    validCharacters: (value) => /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9\s]+$/.test(value) || "Ім'я може містити тільки літери, цифри та пробіли"
                                }
                            })}
                        />
                        {errors.playerO && <p className={styles.error}>{errors.playerO.message}</p>}
                    </div>

                    <div className={styles.buttons}>
                        <Button type="submit">Зберегти</Button>
                        <Button type="button" onClick={onBack}>Назад</Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default SettingsPage;