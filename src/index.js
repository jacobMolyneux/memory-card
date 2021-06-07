import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <h1>How To Play:</h1>
    <p>Gain a point by choosing a card that you have not clicked before. If you click the same card twice you lose! </p>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


