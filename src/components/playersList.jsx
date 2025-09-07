import Player from './player.jsx';
import players from '../players.js';

function PlayersList() {
  return (
    <div className="flex flex-wrap justify-center items-start gap-4 px-4">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
