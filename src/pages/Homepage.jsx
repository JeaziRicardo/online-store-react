import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoryFilter from '../components/CategoryFilter';

export default class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      categoryList: [],
    };
  }

  async componentDidMount() {
    const url = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      categoryList: data,
    });
  }

  render() {
    const { categoryList } = this.state;

    return (
      <div>
        <CategoryFilter categoryList={ categoryList } />
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
