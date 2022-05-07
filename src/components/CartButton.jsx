import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import cartIcon from '../images/cart.png';

export default class CartButton extends Component {
  render() {
    const { quantityCart } = this.props;

    return (
      <div className="btnCartContainer">
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          <img className="cartIcon" src={ cartIcon } alt="cart icon" />
          <p className="quantityCart" data-testid="shopping-cart-size">{ quantityCart }</p>
        </Link>
      </div>
    );
  }
}
