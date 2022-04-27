import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { data } = this.props;
    const { results } = data;
    return (
      <section>
        {results.map(({ title, price, thumbnail, id }) => (
          <div key={ id } data-testid="product">
            <h3>{ title }</h3>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
          </div>
        ))}
      </section>
    );
  }
}

ProductCard.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default ProductCard;
