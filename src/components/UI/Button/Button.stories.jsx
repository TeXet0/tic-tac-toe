import Button from './Button';

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

export const Primary = {
    args: {
        children: 'Грати знову',
    },
};

export const Secondary = {
    args: {
        children: 'Вийти в меню',
        type: 'button',
    },
};