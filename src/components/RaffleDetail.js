import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

const raffles = [
  { id: 1, name: 'Rifa 1', description: 'Descrição da Rifa 1' },
  { id: 2, name: 'Rifa 2', description: 'Descrição da Rifa 2' },
  { id: 3, name: 'Rifa 3', description: 'Descrição da Rifa 3' },
];

function RaffleDetail() {
  const { id } = useParams();
  const history = useHistory();
  const raffle = raffles.find(r => r.id === parseInt(id));

  if (!raffle) {
    return <div>Rifa não encontrada</div>;
  }

  const handlePurchase = () => {
    history.push(`/`);
  };
  return (
    <div className='cardRif'>
      <h1>{raffle.name}</h1>
      <p>{raffle.description}</p>
      <Link className='itemRif' to={`/purchase/${raffle.id}`}>Comprar Bilhete</Link>
      <button onClick={handlePurchase}>voltar ao inicio</button>
    </div>
  );
}

export default RaffleDetail;
