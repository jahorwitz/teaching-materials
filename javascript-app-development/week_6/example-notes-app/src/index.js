import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
