import React from 'react';
import ReactDOM from 'react-dom';
import './styles/settings.scss';
import App from './App';
import ProductsProvider from './data/productsData';
import CardProvider from './data/cartData';

ReactDOM.render(
  <ProductsProvider>
    <CardProvider>
      <App />
    </CardProvider>
  </ProductsProvider>,
  document.getElementById('root'));
