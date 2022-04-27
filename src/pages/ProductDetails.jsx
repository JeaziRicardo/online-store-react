import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';

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

    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
}.isRequired;
