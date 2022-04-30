import React from 'react';
import propTypes from 'prop-types';
// import { handleClick } from './ButtonAddCart';
import '../App.css';

class QuantityButton extends React.Component {
  constructor() {
    super();
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);

    this.state = {
      qtdProducts: 0,
    };
  }

  handleClickPlus() {
    const { id } = this.props;
    const { qtdProducts } = this.state;

    if (localStorage.getItem('arrProds') === null) {
      const arrIdProds = [id];
      localStorage.setItem('arrProds', JSON.stringify(arrIdProds));
    } else {
      const arrIdProdStorage = JSON.parse(localStorage.getItem('arrProds'));
      arrIdProdStorage.push(id);

      localStorage.setItem('arrProds', JSON.stringify(arrIdProdStorage));

      this.setState({
        qtdProducts: qtdProducts + 1,
      });
    }
  }

  handleClickMinus() {
    const { id } = this.props;
    const { qtdProducts } = this.state;

    if (qtdProducts <= 0) {
      this.setState({
        qtdProducts: 0,
      });
    } else {
      const arrIdProdStorage = JSON.parse(localStorage.getItem('arrProds'));
      arrIdProdStorage.splice(id, 1);
      localStorage.setItem('arrProds', JSON.stringify(arrIdProdStorage));

      this.setState({
        qtdProducts: qtdProducts - 1,
      });
    // loadPage();
    }
  }

  // ao carregar pag, definir valor inicial
  componentDidMount = () => {
    const { id } = this.props;

    const cartItems = JSON.parse(localStorage.getItem('arrProds'));
    if (cartItems) {
      const itemsFiltered = cartItems.filter((itemId) => itemId === id);

      // quantidade do produto atual
      this.setState({
        qtdProducts: itemsFiltered.length,
      });
    }
  }

  render() {
    const { qtdProducts } = this.state;

    return (
      <div className="qtdProduct">
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.handleClickMinus }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ qtdProducts }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.handleClickPlus }
        >
          +
        </button>
      </div>
    );
  }
}

QuantityButton.propTypes = {
  id: propTypes.string.isRequired,
};

export default QuantityButton;
