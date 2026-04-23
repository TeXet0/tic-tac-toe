import React, { useState } from 'react';
import CookieConsent from "react-cookie-consent";
import StartPage from './pages/StartPage/StartPage';
import GamePage from './pages/GamePage/GamePage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

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

    return (
        <div className="App">
            {renderPage()}
            <CookieConsent
                location="bottom"
                buttonText="Зрозуміло та Згоден"
                cookieName="ticTacToeGdprConsent"
                style={{ background: "#2B373B", alignItems: "center" }}
                buttonStyle={{
                    color: "#4e503b",
                    fontSize: "14px",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    fontWeight: "bold"
                }}
                expires={150}
            >
                Ця гра використовує Local Storage вашого браузера для збереження налаштувань та імен гравців згідно з політикою GDPR.{" "}
                <span style={{ fontSize: "12px", color: "#d1d5db" }}>Ми не збираємо та не передаємо дані третім особам.</span>
            </CookieConsent>
        </div>
    );
}

export default App;