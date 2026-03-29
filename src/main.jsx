import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ClubesProvider } from './context/ClubesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ClubesProvider>
    <App />
  </ClubesProvider>
</BrowserRouter>
);