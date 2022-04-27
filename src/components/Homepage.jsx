import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      data: null,
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  handleClick = async () => {
    const { search } = this.state;
    const data = await getProductsFromCategoryAndQuery('CATEGORY_ID', search);
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <section>
        <div>
          <label htmlFor="query">
            <input
              name="query"
              data-testid="query-input"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Busca
          </button>
        </div>
        { data === null && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) }
        { data !== null && <ProductCard data={ data } /> }
      </section>
    );
  }
}
