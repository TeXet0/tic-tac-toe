import React from 'react';
import styles from './Square.module.scss';
import { useGameStore } from '../../store/gameStore.js';

const Square = ({ value, onClick }) => {
    const settings = useGameStore((state) => state.settings);
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