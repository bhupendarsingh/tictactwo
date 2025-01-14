import React, { createContext, useContext, useState } from 'react';

const PlayerNameContext = createContext();
export const PlayerNameProvider = ({ children }) => {
  const [playerNames, setPlayerNames] = useState({ player1: 'Player1', player2: 'Player2' });
  return (
    <PlayerNameContext.Provider value={{ playerNames, setPlayerNames }}>
      {children}
    </PlayerNameContext.Provider>
  );
};
export const usePlayerNames = () => useContext(PlayerNameContext);
