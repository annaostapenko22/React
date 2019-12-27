import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import publications from './publications.json';
ReactDOM.render(
  <App publications={publications} />,
  document.getElementById('root'),
);
