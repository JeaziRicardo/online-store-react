import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleChange = ({ target }) => {
    const { event } = target;
    this.setState({ search: event });
  };

  handleClick = async () => {
    const { search } = this.state;
    const data = await getProductsFromCategoryAndQuery('CATEGORY_ID', search);
  };

  render() {
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
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}
