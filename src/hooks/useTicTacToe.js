import { useState, useCallback } from 'react';

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (squares.every(square => square !== null)) {
        return 'Draw';
    }
    return null;
};

export const useTicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = calculateWinner(board);
    const currentPlayer = isXNext ? 'X' : 'O';


    const handleClick = useCallback((index) => {
        if (winner || board[index]) {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = currentPlayer; // Ставимо 'X' або 'O'
        setBoard(newBoard);

        setIsXNext(!isXNext);
    }, [board, isXNext, winner, currentPlayer]);

    const handleRestart = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    return {
        board,
        winner,
        currentPlayer,
        handleClick,
        handleRestart,
    };
};