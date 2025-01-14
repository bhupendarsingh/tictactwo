import React from 'react';
import './App.css';
import Player from './components/player';
import PlayBox from './components/playbox';


function App() {
  return (
   
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}  >
        <div style={{ display: 'flex' }}>
          <Player playerName="Player1" playerValue="X" />
          <Player playerName="Player2" playerValue="0" />
        </div>
        <PlayBox />
      </div>
    
  );
}

export default App;