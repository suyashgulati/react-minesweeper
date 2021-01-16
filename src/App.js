import React from 'react';
import 'normalize.css';
import './App.css';
import Board from './components/Board/Board';

function App() {
  const grid = getGrid(9, 9);
  return (
    <div className="App">
      <Board grid={grid}>

      </Board>
    </div>
  );
}

export default App;

function getGrid(m, n) {
  return Array.from({
    length: m,
  }, () => new Array(n).fill(0));
};