import React from 'react';
import GamePage from './pages/GamePage/GamePage';
import StartPage from './pages/StartPage/StartPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import './assets/styles/main.scss';

function App() {
  return (
      <div className="App">
        <GamePage />
        {/* <StartPage /> */}
        {/* <ResultsPage /> */}
      </div>
  );
}

export default App;