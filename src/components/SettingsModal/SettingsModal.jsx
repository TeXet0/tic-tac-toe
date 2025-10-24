import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { SettingsContext } from '../../context/SettingsContext.jsx';
import Button from '../UI/Button/Button';
import styles from './SettingsModal.module.scss';

const modalRoot = document.getElementById('modal-root');

const SettingsModal = ({ onClose }) => {
    const { settings, updateSettings } = useContext(SettingsContext);

    const { register, handleSubmit } = useForm({
        defaultValues: settings
    });

    const onSubmit = (data) => {
        updateSettings(data);
        onClose();
    };

    const modalContent = (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Налаштування гри</h2>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    <fieldset className={styles.fieldset}>
                        <legend>Гравець X</legend>
                        <div className={styles.formGroup}>
                            <label htmlFor="playerXName">Ім'я</label>
                            <input id="playerXName" {...register("playerX.name", { required: true })} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="playerXColor">Колір</label>
                            <input id="playerXColor" type="color" {...register("playerX.color")} />
                        </div>
                    </fieldset>

                    <fieldset className={styles.fieldset}>
                        <legend>Гравець O</legend>
                        <div className={styles.formGroup}>
                            <label htmlFor="playerOName">Ім'я</label>
                            <input id="playerOName" {...register("playerO.name", { required: true })} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="playerOColor">Колір</label>
                            <input id="playerOColor" type="color" {...register("playerO.color")} />
                        </div>
                    </fieldset>

                    <div className={styles.buttons}>
                        <Button type="submit">Зберегти</Button>
                        <Button type="button" onClick={onClose}>Закрити</Button>
                    </div>
                </form>

            </div>
        </div>
    );

    return ReactDOM.createPortal(modalContent, modalRoot);
};

export default SettingsModal;