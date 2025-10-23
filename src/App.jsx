import React, { useState } from 'react';
import StartPage from './pages/StartPage/StartPage.jsx';
import GamePage from './pages/GamePage/GamePage.jsx';
import SettingsPage from './pages/SettingsPage/SettingsPage.jsx';
import './assets/styles/main.scss';

function App() {
    const [currentPage, setCurrentPage] = useState('start');

    const handleStartGame = () => setCurrentPage('game');
    const handleGoToSettings = () => setCurrentPage('settings');
    const handleGoHome = () => setCurrentPage('start');


    const renderPage = () => {
        switch (currentPage) {
            case 'game':
                return <GamePage onGoHome={handleGoHome} />;
            case 'settings':
                return <SettingsPage onBack={handleGoHome} />;
            case 'start':
            default:
                return <StartPage
                    onStartGame={handleStartGame}
                    onGoToSettings={handleGoToSettings}
                />;
        }
    };

    return <div className="App">{renderPage()}</div>;
}

export default App;