import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/checkout" component={ Checkout } />
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
            <Route exact path="/productdetails/:id" component={ ProductDetails } />
            <Route exact path="/" component={ Homepage } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
