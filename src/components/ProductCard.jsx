import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddCart from './ButtonAddCart';

class ProductCard extends Component {
  render() {
    const { data, inputEmpty } = this.props;
    const { results } = data;
    return (
      <section>
        { results.length === 0 && inputEmpty }
        { results.length !== 0 && results.map(({ title, price, thumbnail, id }) => (
          <div key={ id } data-testid="product">
            <Link to={ `/productdetails/${id}` } data-testid="product-detail-link">
              <h3>{ title }</h3>
              <img src={ thumbnail } alt={ title } />
              <p>{ `R$ ${price}` }</p>
            </Link>
            <ButtonAddCart data-testid="product-add-to-cart" id={ id } />
          </div>
        )) }
      </section>
    );
  }
}

ProductCard.propTypes = {
  data: PropTypes.shape().isRequired,
  inputEmpty: PropTypes.shape().isRequired,
};

export default ProductCard;

/* Nesse arquivo só passei o id como props para o ButtonAddCart */
