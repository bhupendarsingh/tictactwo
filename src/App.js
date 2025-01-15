import React, { useState } from 'react';
import './App.css';
import Player from './components/player';
import PlayBox from './components/playbox';


function App() {
const[player1,setReceivedCallbackbata1]=useState("player1")
const[player2,setReceivedCallbackbata2]=useState("player2") 
const callback1 = (receivedData) => {
    setReceivedCallbackbata1(receivedData)
  };

  const callback2 = (receivedData) => {
    setReceivedCallbackbata2(receivedData)
  };
  return (

    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}  >
      <div style={{ display: 'flex' }}>
        <Player playerName="Player1" playerValue="X" player1Callback={callback1} />
        <Player playerName="Player2" playerValue="0" player1Callback={callback2} />
      </div>
      <PlayBox player1={player1} player2={player2}/>
    </div>
  );
}

export default App;