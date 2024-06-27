import React from 'react';
import { Link } from 'react-router-dom';

const raffles = [
  { id: 1, name: 'Rifa 1' },
  { id: 2, name: 'Rifa 2' },
  { id: 3, name: 'Rifa 3' },
];

function RaffleList() {
  return (
    <div className='cardRif'>
      <h1>Rifas Disponíveis</h1>
      <ul>
        {raffles.map(raffle => (
          <li key={raffle.id}>
            <Link className='selecioneRifa' to={`/raffle/${raffle.id}`}>{raffle.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RaffleList;
