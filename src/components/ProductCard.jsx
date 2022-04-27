import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { data, emputEmpty } = this.props;
    const { results } = data;
    return (
      <section>
        { results.length === 0 && emputEmpty }
        { results.length !== 0 && results.map(({ title, price, thumbnail, id }) => (
          <div key={ id } data-testid="product">
            <h3>{ title }</h3>
            <img src={ thumbnail } alt={ title } />
            <p>{ `R$ ${price}` }</p>
          </div>
        )) }
      </section>
    );
  }
}

ProductCard.propTypes = {
  data: PropTypes.shape().isRequired,
  emputEmpty: PropTypes.string.isRequired,
};

export default ProductCard;
