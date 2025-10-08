import React, { useState } from 'react';
import Square from '../Square/Square';
import styles from './Board.module.scss';

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    return (
        <div className={styles.board}>
            {squares.map((_, i) => (
                <Square key={i} value={squares[i]} />
            ))}
        </div>
    );
};

export default Board;