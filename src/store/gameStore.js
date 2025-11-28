import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const createSettingsSlice = (set) => ({
    settings: {
        playerX: { name: 'Гравець X', color: '#6366f1' },
        playerO: { name: 'Гравець O', color: '#ec4899' }
    },
    updateSettings: (newSettings) => set(() => ({
        settings: newSettings
    })),
});

const createResultsSlice = (set) => ({
    results: [],
    addResult: (newResult) => set((state) => ({
        results: [newResult, ...state.results]
    })),
    clearResults: () => set(() => ({ results: [] })),
});

export const useGameStore = create(
    persist(
        (...a) => ({
            ...createSettingsSlice(...a),
            ...createResultsSlice(...a),
        }),
        {
            name: 'game-storage',
        }
    )
);