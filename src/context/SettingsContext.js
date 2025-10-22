import React, { createContext, useState, useMemo, useEffect } from 'react';

export const SettingsContext = createContext(null);

const getInitialSettings = () => {
    const savedSettings = localStorage.getItem('gameSettings');
    if (savedSettings) {
        return JSON.parse(savedSettings);
    }
    return {
        playerX: 'Гравець X',
        playerO: 'Гравець O',
    };
};

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(getInitialSettings);

    useEffect(() => {
        localStorage.setItem('gameSettings', JSON.stringify(settings));
    }, [settings]);

    const updateSettings = (newSettings) => {
        setSettings(newSettings);
    };

    const value = useMemo(() => ({
        settings,
        updateSettings,
    }), [settings]);

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};