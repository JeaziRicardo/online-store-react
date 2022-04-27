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
      search: '',
    };
  }

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categoryList: data,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  }

  handleClick = async () => {
    const { search } = this.state;
    const data = await getProductsFromCategoryAndQuery('CATEGORY_ID', search);
  };

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
        <CartButton />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
