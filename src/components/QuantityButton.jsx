import React from 'react';
import propTypes from 'prop-types';
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
    this.setState((prevState) => ({
      qtdProducts: prevState.qtdProducts + 1,
    }));
  }

  handleClickMinus() {
    const { qtdProducts } = this.state;

    if (qtdProducts > 0) {
      this.setState({
        qtdProducts: qtdProducts - 1,
      });
    }
  }

  componentDidMount = () => {
    const { prodQuantity } = this.props;

    // quantidade do produto atual
    this.setState({
      qtdProducts: prodQuantity,
    });
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
  prodQuantity: propTypes.number.isRequired,
};

export default QuantityButton;
