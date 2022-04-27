import React, { Component } from 'react';

export default class ButtonAddCart extends Component {
  handleClick = () => {
    const { id } = this.props;

  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}
