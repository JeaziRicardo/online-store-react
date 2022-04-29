import React, { Component } from 'react';
import { getProductDetails } from '../services/api';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.mountObj = this.mountObj.bind(this);

    this.state = {
      cartList: [],
    };
  }

  async componentDidMount() {
    if (localStorage.getItem('arrProds') !== null) { // essa linha é apenas para evitar erro caso cliquemos no carrinho e não tenha produto
      const arrIds = JSON.parse(localStorage.getItem('arrProds')); // pega o arr de IDs que está no local storage

      const arrObjs = [];

      const prom = arrIds.map(async (id) => {
        const obj = await this.mountObj(id);
        obj.quant = 1;

        const objJaExiste = arrObjs.find((iterableObj) => iterableObj.id === obj.id);

        if (objJaExiste !== undefined) {
          arrObjs.forEach((iterableObj) => {
            if (iterableObj.id === objJaExiste.id) { iterableObj.quant += 1; }
          });
        } else {
          arrObjs.push(obj);
        }
      });

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
      await Promise.all(prom);

      // no fim de todo a iteração, basta setar o arr no state
      this.setState({
        cartList: arrObjs,
      });
    }
  }

  // método simples que pega o id e busca seu respectivo obj no endpoint correto
  async mountObj(id) {
    const obj = await getProductDetails(id);
    return obj;
  }

  render() {
    const { cartList } = this.state;

    return (
      <div>
        {
          cartList.length !== 0
            ? (
              <div>
                { // map para iterar sobre o array de produtos
                  cartList.map((prod, index) => (
                    <div key={ index }>
                      <p data-testid="shopping-cart-product-name">{ prod.title }</p>
                      <p data-testid="shopping-cart-product-quantity">{ prod.quant }</p>
                    </div>
                  ))
                }
              </div>
            )
            : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
      </div>
    );
  }
}
