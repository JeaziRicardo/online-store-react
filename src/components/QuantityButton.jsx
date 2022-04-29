import React from 'react';
import propTypes from 'prop-types';
// import { handleClick } from './ButtonAddCart';

class QuantityButton extends React.Component {
  constructor() {
    super();
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);

    // const { id } = this.props;
    // this.state = {
    //   id,
    // };
  }

  handleClickPlus() {
    const { id, loadPage } = this.props;

    if (localStorage.getItem('arrProds') === null) {
      const arrIdProds = [id];
      localStorage.setItem('arrProds', JSON.stringify(arrIdProds));
    } else {
      const arrIdProdStorage = JSON.parse(localStorage.getItem('arrProds'));
      arrIdProdStorage.push(id);
      localStorage.setItem('arrProds', JSON.stringify(arrIdProdStorage));
    }
    loadPage();
  }

  handleClickMinus() {
    const { id, loadPage } = this.props;

    const arrIdProdStorage = JSON.parse(localStorage.getItem('arrProds'));
    arrIdProdStorage.splice(id, 1);
    localStorage.setItem('arrProds', JSON.stringify(arrIdProdStorage));

    loadPage();
  }

  render() {
    return (
      <div>
        <button type="button" data-testid="product-decrease-quantity" onClick={ this.handleClickMinus }>-</button>
        <button type="button" data-testid="product-increase-quantity" onClick={ this.handleClickPlus }>+</button>
      </div>
    );
  }
}

QuantityButton.propTypes = {
  id: propTypes.string.isRequired,
};

export default QuantityButton;
