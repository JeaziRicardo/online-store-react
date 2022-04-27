import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoryFilter from '../components/CategoryFilter';
import '../style/Homepage.css';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

export default class Homepage extends Component {
  constructor() {
    super();

    this.onChangeRadio = this.onChangeRadio.bind(this);

    this.state = {
      categoryList: [],
      search: '',
      data: null,
      // idSelectedCategory: '',
    };
  }

  async componentDidMount() {
    const datas = await getCategories();
    this.setState({
      categoryList: datas,
    });
  }

  async onChangeRadio(event) {
    // const valueElement = event.target.checked;
    const idElement = event.target.id;
    const data = await getProductsFromCategoryAndQuery(idElement);
    this.setState({
      data,
    });
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  }

  handleClick = async () => {
    const { search } = this.state;
    const data = await getProductsFromCategoryAndQuery('CATEGORY_ID', search);
    this.setState({ data });
  };

  render() {
    const { categoryList, data } = this.state;

    return (
      <div className="homepage">
        <CategoryFilter
          categoryList={ categoryList }
          onChangeRadio={ this.onChangeRadio }
        />
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
        { data === null && (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) }
        { data !== null && <ProductCard
          data={ data }
          inputEmpty={ <p>Nenhum produto foi encontrado</p> }
        /> }
      </div>
    );
  }
}
