import React from 'react';
import styles from './Square.module.scss';

const Square = ({ value, onClick }) => {
    return (
        <button className={styles.square} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;