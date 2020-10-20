import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/views/About/About';
import Cart from './components/views/Cart/Cart';
import Checkout from './components/views/Checkout/Checkout';
import Error from './components/views/Error/Error';
import Home from './components/views/Home/Home';
import Login from './components/views/Login/Login/Login';
import Products from './components/views/Products/Products';
import ProductDetails from './components/views/Product/ProductDetails';
import Header from './components/layout/Header/Header';
import UserType from './components/views/UserType/UserType';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/products/:id' children={<ProductDetails />}>
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/checkout'>
          <Checkout />
        </Route>
        <Route exact path='/usertype'>
          <UserType />
        </Route>
        <Route path='*'>
          <Error/>
        </Route>
      </Switch>
    </Router>
  )
}
