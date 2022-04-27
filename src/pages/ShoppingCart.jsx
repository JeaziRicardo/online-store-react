import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}
