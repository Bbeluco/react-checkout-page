import React from 'react';
import RightSide from './components/Menu/RightSide'
import LeftSide from './components/Menu/LeftSide';
import './App.css'

function App() {
  return (
    <div class="app">
      <div class="checkout">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
