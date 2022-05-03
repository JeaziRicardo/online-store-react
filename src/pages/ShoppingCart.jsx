import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import QuantityButton from '../components/QuantityButton';
import { getProductDetails } from '../services/api';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.mountObj = this.mountObj.bind(this);

    this.state = {
      cartList: [],
      finished: false,
    };
  }

  componentDidMount = async () => {
    if (localStorage.getItem('arrProds') !== null) { // essa linha é apenas para evitar erro caso cliquemos no carrinho e não tenha produto
      const arrProds = JSON.parse(localStorage.getItem('arrProds')); // pega o arr de IDs que está no local storage

      // no fim de todo a iteração, basta setar o arr no state
      this.setState({
        cartList: arrProds,
      });
    }
  }

  handleClick = () => {
    this.setState({ finished: true });
  };

  // método simples que pega o id e busca seu respectivo obj no endpoint correto
  async mountObj(id) {
    const obj = await getProductDetails(id);
    return obj;
  }

  render() {
    const { cartList, finished } = this.state;

    return (
      <div>
        {
          cartList.length !== 0
            ? (
              <section>
                <div>
                  {// map para iterar sobre o array de produtos
                    cartList.map((prod, index) => (
                      <div key={ index }>
                        <p data-testid="shopping-cart-product-name">{prod.title}</p>

                        <QuantityButton
                          prodQuantity={ prod.quant }
                        />
                      </div>
                    ))
                  }
                </div>
                <button
                  data-testid="checkout-products"
                  type="button"
                  onClick={ this.handleClick }
                >
                  Finalizar Compra
                </button>
              </section>
            )
            : (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)
        }
        {finished && <Redirect to="/checkout" />}
      </div>
    );
  }
}
