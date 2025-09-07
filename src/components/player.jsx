
import React from 'react';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md w-72 m-4 overflow-hidden hover:scale-105 transition duration-300">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p><strong>Team:</strong> {team}</p>
        <p><strong>Nationality:</strong> {nationality}</p>
        <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
        <p><strong>Age:</strong> {age}</p>
      </div>
    </div>
  );
}

export default Player;
