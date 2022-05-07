import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import ButtonAddCart from '../components/ButtonAddCart';
import CartButton from '../components/CartButton';

export default class ProductDetails extends Component {
  constructor() {
    super();

    let quantity = JSON.parse(localStorage.getItem('total'));
    if (!quantity) {
      quantity = 0;
    }

    this.state = {
      productDetails: '',
      savedRating: '',
      quantityCart: quantity,
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;

    const productDetails = await getProductDetails(id);

    this.setState({
      productDetails,
    });

    if (this.ratingExists()) {
      const rating = JSON.parse(localStorage.getItem('rating'));
      this.setState({
        savedRating: rating,
      });
    }
  }

  updateTotal = () => {
    let total = JSON.parse(localStorage.getItem('total'));
    total += 1;

    this.setState({
      quantityCart: total,
    });

    localStorage.setItem('total', total);
  }

  ratingExists = () => {
    const ratings = localStorage.getItem('rating');
    if (ratings) {
      return true;
    }

    return false;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    // salvar cada elemento no estado

    this.setState({
      // setando cada form de avaliação como obj no estado
      [name]: value,
    });
  }

  saveForm = (event) => {
    event.preventDefault();

    const { email, rating, message } = this.state;
    const data = [email, rating, message];

    const savedRatings = JSON.parse(localStorage.getItem('rating'));

    // Verificar se existe avaliações salvas no localStorage, se existir adicionar ao array
    if (savedRatings) {
      savedRatings.push(data);

      localStorage.setItem('rating', JSON.stringify(savedRatings));
    } else {
      localStorage.setItem('rating', JSON.stringify([data]));
    }
  }

  render() {
    const { productDetails: { title }, savedRating } = this.state;
    const { productDetails, quantityCart } = this.state;
    // const { match: { params: { id } } } = this.props;

    return (
      <div>
        <CartButton quantityCart={ quantityCart } />
        <h1 data-testid="product-detail-name">{ title }</h1>
        <ButtonAddCart
          dataTestid="product-detail-add-to-cart"
          product={ productDetails }
          updateTotal={ this.updateTotal }
        />

        <h1>Avaliações</h1>
        <div>
          <form onSubmit={ this.saveForm }>
            <input
              name="email"
              onChange={ this.handleChange }
              type="email"
              placeholder="teste@trybe.com"
              data-testid="product-detail-email"
              required
            />
            <label htmlFor="1-rating">
              1
              <input
                id="1-rating"
                data-testid="1-rating"
                type="radio"
                onChange={ this.handleChange }
                name="rating"
                value="1"
                required
              />
            </label>
            <label htmlFor="2-rating">
              2
              <input
                id="2-rating"
                data-testid="2-rating"
                type="radio"
                onChange={ this.handleChange }
                name="rating"
                value="2"
              />
            </label>
            <label htmlFor="3-rating">
              3
              <input
                id="3-rating"
                data-testid="3-rating"
                type="radio"
                onChange={ this.handleChange }
                name="rating"
                value="3"
              />
            </label>
            <label htmlFor="4-rating">
              4
              <input
                id="4-rating"
                data-testid="4-rating"
                type="radio"
                onChange={ this.handleChange }
                name="rating"
                value="4"
              />
            </label>
            <label htmlFor="5-rating">
              5
              <input
                id="5-rating"
                data-testid="5-rating"
                type="radio"
                onChange={ this.handleChange }
                name="rating"
                value="5"
              />
            </label>
            <textarea
              name="message"
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
              placeholder="Mensagem"
            />

            <button
              type="submit"
              data-testid="submit-review-btn"
              onClick={ this.componentDidMount }
            >
              Enviar
            </button>
          </form>
        </div>
        {!savedRating ? <p>Sem avaliações</p> : savedRating.map((rating, index) => (
          <div key={ index }>
            <p>{rating[0]}</p>
            <p>{rating[1]}</p>
            <p>{rating[2]}</p>
          </div>
        ))}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;
