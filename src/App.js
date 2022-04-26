import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
            <Route exact path="/" component={ Homepage } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
