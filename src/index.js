import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transaction from './transactions.json';

console.log(statisticalData);
ReactDOM.render(
  <App
    user={user}
    statistic={statisticalData}
    friends={friends}
    transaction={transaction}
  />,
  document.getElementById('root'),
);
