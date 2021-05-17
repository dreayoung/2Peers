import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
<<<<<<< HEAD
import TwoPeersProvider from './context/2PeersProvider';
=======
import TwoPeersProvider from './context/TwoPeersProvider';
>>>>>>> feat/signup-backend

ReactDOM.render(
  <TwoPeersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TwoPeersProvider>,
  document.getElementById('root'),
);
