import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class ButtonAddCart extends Component {
  handleClick = () => {
    const { id } = this.props; // veio do ProductCart

    if (localStorage.getItem('arrProds') === null) { // entra aqui se ainda não existir a chave arrProds no local storage
      const arrIdProds = [id];
      localStorage.setItem('arrProds', JSON.stringify(arrIdProds)); // ja que é o 1º id, só setar no localstorage
    } else { // se já for o 2º produto...
      const arrIdProdStorage = JSON.parse(localStorage.getItem('arrProds')); // .. preciso pegar o que já tem no local storage antes...
      arrIdProdStorage.push(id); // adiciono o id em questão à lista
      localStorage.setItem('arrProds', JSON.stringify(arrIdProdStorage)); // e seto novamente no local storage.
    }
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ButtonAddCart.propTypes = {
  id: propTypes.string.isRequired,
};
