import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/main.scss';
import { SettingsProvider } from './context/SettingsContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <SettingsProvider>
                <App />
            </SettingsProvider>
        </BrowserRouter>
    </React.StrictMode>,
)