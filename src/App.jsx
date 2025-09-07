import React from 'react';
import PlayersList from './components/playersList'



function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mt-10 mb-6 text-blue-600">
        ⚽ My FIFA Player Cards
      </h1>
      <PlayersList />
    </div>
  );
}

export default App;

