import React from 'react';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Гра "Хрестики-Нулики"</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;