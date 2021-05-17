import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
<<<<<<< HEAD
<<<<<<< HEAD
import TwoPeersProvider from './context/2PeersProvider';
=======
import TwoPeersProvider from './context/TwoPeersProvider';
>>>>>>> feat/signup-backend
=======
import TwoPeersProvider from './context/TwoPeersProvider';
>>>>>>> 7df2ff9273aff83dc919a67e9b535e6d6f7fd6d9

ReactDOM.render(
  <TwoPeersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TwoPeersProvider>,
  document.getElementById('root'),
);
