import React from 'react';
import ReactDOM from 'react-dom';
import './styles/settings.scss';
import App from './App';
import ProductsProvider from './data/productsData';
import CardProvider from './data/cartData';
import UserProvider from './data/userData'

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <CardProvider>
        <App />
      </CardProvider>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById('root'));
