import React from 'react';
import './App.css';
import LeftPanel from './components/leftPanel.js';
import RightPanel from './components/rightPanel.js';

function App() {
  return (
    <div className="App">
      <div className="main">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
