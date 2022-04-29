import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import ButtonAddCart from '../components/ButtonAddCart';
import CartButton from '../components/CartButton';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productDetails: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const productDetails = await getProductDetails(id);

    this.setState({
      productDetails,
    });
  }

  render() {
    const { productDetails: { title } } = this.state;
    const { match: { params: { id } } } = this.props;

    return (
      <div>
        <CartButton />
        <h1 data-testid="product-detail-name">{ title }</h1>
        <ButtonAddCart dataTestid="product-detail-add-to-cart" id={ id } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;
