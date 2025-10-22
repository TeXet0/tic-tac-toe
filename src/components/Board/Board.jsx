import React from 'react';
import Square from '../Square/Square.jsx';
import styles from './Board.module.scss';

const Board = ({ squares, onSquareClick }) => {
    return (
        <div className={styles.board}>
            {squares.map((value, i) => (
                <Square
                    key={i}
                    value={value}
                    onClick={() => onSquareClick(i)}
                />
            ))}
        </div>
    );
};

export default Board;