import React from 'react';
import RaffleList from '../components/RaffleList';
import RaffleDetail from '../components/RaffleDetail';
import TicketPurchase from '../components/TicketPurchase';
import PurchaseConfirmation from '../components/PurchaseConfirmation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom';

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={RaffleList} />
          <Route path="/raffle/:id" component={RaffleDetail} />
          <Route path="/purchase/:id" component={TicketPurchase} />
          <Route path="/confirmation/:id" component={PurchaseConfirmation} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
