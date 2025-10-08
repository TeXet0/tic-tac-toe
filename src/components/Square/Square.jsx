import React from 'react';
import styles from './Square.module.scss';

const Square = ({ value }) => {
    return (
        <button className={styles.square}>
            {value}
        </button>
    );
};

export default Square;