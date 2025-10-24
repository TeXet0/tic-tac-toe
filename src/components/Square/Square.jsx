import React, { useContext } from 'react';
import styles from './Square.module.scss';
import { SettingsContext } from '../../context/SettingsContext.jsx';

const Square = ({ value, onClick }) => {
    const { settings } = useContext(SettingsContext);

    const color = value === 'X'
        ? settings.playerX.color
        : value === 'O'
            ? settings.playerO.color
            : '#1f2937';

    return (
        <button
            className={styles.square}
            onClick={onClick}
            style={{ color: color }}
        >
            {value}
        </button>
    );
};

export default Square;