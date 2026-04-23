import GameEndModal from './GameEndModal';

export default {
    title: 'Game/GameEndModal',
    component: GameEndModal,
};

export const WinnerX = {
    args: {
        isOpen: true,
        winnerName: 'Іван (X)',
    },
};

export const Draw = {
    args: {
        isOpen: true,
        winnerName: 'Draw',
    },
};

export const Closed = {
    args: {
        isOpen: false,
        winnerName: 'Марія (O)',
    },
};