import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage.jsx';
import GamePage from './pages/GamePage/GamePage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import './assets/styles/main.scss';
import Layout from './components/UI/Layout/Layout.jsx';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/player/:playerId" element={<ProfilePage />} />

                <Route path="*" element={
                    <Layout>
                        <div style={{ textAlign: 'center' }}>
                            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>404</h1>
                            <p style={{ fontSize: '1.5rem' }}>Сторінку не знайдено</p>
                        </div>
                    </Layout>
                } />

            </Routes>
        </div>
    );
}

export default App;