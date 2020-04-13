import React from 'react';
import Stopwatch from './components/Stopwatch';
import Laps from './components/Laps';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stopwatch />
        <Laps />
      </header>
    </div>
  );
}

export default App;
