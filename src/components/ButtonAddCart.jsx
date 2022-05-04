import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ButtonAddCart extends Component {
  handleClick = () => {
    const { product } = this.props; // veio do ProductCart

    const productProps = product;

    productProps.quant = 1;

    if (localStorage.getItem('arrProds') === null) { // entra aqui se ainda não existir a chave arrProds no local storage
      const arrProds = [productProps];
      localStorage.setItem('arrProds', JSON.stringify(arrProds)); // ja que é o 1º prod, só setar no localstorage
    } else { // se já for o 2º produto...
      const arrProdStorage = JSON.parse(localStorage.getItem('arrProds')); // .. preciso pegar o que já tem no local storage antes...

      const objProdExists = arrProdStorage.find((prod) => prod.id === productProps.id);

      if (objProdExists !== undefined) {
        const index = arrProdStorage.findIndex((prod) => prod.id === objProdExists.id);
        arrProdStorage[index].quant += 1;
      } else {
        arrProdStorage.push(product);
      }

      localStorage.setItem('arrProds', JSON.stringify(arrProdStorage)); // e seto novamente no local storage.
    }
  }

  render() {
    const { dataTestid } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid={ dataTestid }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ButtonAddCart.propTypes = {
  product: propTypes.shape(propTypes.string.isRequired).isRequired,
  dataTestid: propTypes.string.isRequired,
};
