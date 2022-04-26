import React, { Component } from 'react';
import CartButton from '../components/CartButton';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-product">
          <input
            id="search-product"
          />
          <CartButton />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </label>
      </div>
    );
  }
}
