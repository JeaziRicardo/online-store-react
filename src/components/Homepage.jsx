import React, { Component } from 'react';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-product">
          <input
            id="search-product"
          />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </label>
      </div>
    );
  }
}
