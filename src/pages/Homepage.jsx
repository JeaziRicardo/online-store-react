import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoryFilter from '../components/CategoryFilter';
import '../style/Homepage.css';
import { getCategories } from '../services/api';

export default class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      categoryList: [],
    };
  }

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categoryList: data,
    });
  }

  render() {
    const { categoryList } = this.state;

    return (
      <div className="homepage">
        <CategoryFilter categoryList={ categoryList } />
        <label htmlFor="query">
          <input
            name="query"
            data-testid="query-input"
            type="text"
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
        >
          Busca
        </button>
        <CartButton />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
