import React, { useState, useCallback } from 'react';
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import './assets/styles/main.scss';

function App() {
    const [currentPage, setCurrentPage] = useState('start');
    const [gameResult, setGameResult] = useState(null);

    const handleStartGame = () => {
        setGameResult(null);
        setCurrentPage('game');
    };

    const handleEndGame = useCallback((result) => {
        setGameResult(result); // 'X', 'O' або 'Draw'
        setCurrentPage('results');
    }, []);

    const handleRestart = () => {
        setCurrentPage('start');
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'game':
                return <GamePage onGameEnd={handleEndGame} />;
            case 'results':
                return <ResultsPage winner={gameResult} onRestart={handleRestart} />;
            case 'start':
            default:
                return <StartPage onStartGame={handleStartGame} />;
        }
    };

    return <div className="App">{renderPage()}</div>;
}

export default App;