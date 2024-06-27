import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function TicketPurchase() {
  const { id } = useParams();
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);

  const handlePurchase = () => {
    history.push(`/confirmation/${id}?quantity=${quantity}`);
  };
  const handleReturn = () => {
    history.push(`/`);
  };

  return (
    <div className='cardRif'>
      <h1>Compra de Bilhete para Rifa {id}</h1>
      <input 
        type="number" 
        value={quantity} 
        onChange={e => setQuantity(e.target.value)} 
        min="1"
      />
      <button onClick={handlePurchase}>Comprar</button>
      <button onClick={handleReturn}>voltar ao inicio</button>
    </div>
  );
}

export default TicketPurchase;
