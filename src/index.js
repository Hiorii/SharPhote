import React from 'react';
import ReactDOM from 'react-dom';
import './styles/settings.scss';
import App from './App';
import ProductsProvider from './data/productsData';

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById('root'));
