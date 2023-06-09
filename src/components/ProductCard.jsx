import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddCart from './ButtonAddCart';

class ProductCard extends Component {
  render() {
    const { data, inputEmpty, updateTotal } = this.props;
    const { results } = data;
    return (
      <section>
        { results.length === 0 && inputEmpty }
        { results.length !== 0 && results.map((prodResult) => (
          <div key={ prodResult.id } data-testid="product">
            <Link
              to={ `/productdetails/${prodResult.id}` }
              data-testid="product-detail-link"
            >
              <h3>{ prodResult.title }</h3>
              <img src={ prodResult.thumbnail } alt={ prodResult.title } />
              <p>{ `R$ ${prodResult.price}` }</p>
              {
                prodResult.shipping.free_shipping
                && <strong data-testid="free-shipping">Frete Grátis</strong>
              }
            </Link>
            <ButtonAddCart
              updateTotal={ updateTotal }
              dataTestid="product-add-to-cart"
              product={ prodResult }
            />
          </div>
        )) }
      </section>
    );
  }
}

ProductCard.propTypes = {
  data: PropTypes.shape().isRequired,
  inputEmpty: PropTypes.shape().isRequired,
  updateTotal: PropTypes.func.isRequired,
};

export default ProductCard;
