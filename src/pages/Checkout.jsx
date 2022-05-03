import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount = async () => {
    if (localStorage.getItem('arrProds') !== null) {
      const arrProds = JSON.parse(localStorage.getItem('arrProds'));
      this.setState({
        cartList: arrProds,
      });
    }
  }

  render() {
    const { cartList } = this.state;
    return (
      <main>
        <h1>Revise e confirme sua compra</h1>
        <form>
          <div>
            <h3>Revise seus produtos</h3>
            {
              cartList.map((prod) => (
                <div key={ prod.id }>
                  <p data-testid="shopping-cart-product-name">{prod.title}</p>
                </div>
              ))
            }
          </div>
          <div>
            <h3>Informações do comprador</h3>
            <input
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome Completo"
              name="fullname"
            />
            <input
              data-testid="checkout-email"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              data-testid="checkout-cpf"
              type="text"
              placeholder="CPF"
              pattern="(\d{3}\.\d{3}\.\d{3}-\d{2})"
              name="cpf"
            />
            <input
              data-testid="checkout-phone"
              type="tel"
              placeholder="Telefone"
              name="phone"
            />
            <input
              data-testid="checkout-cep"
              type="text"
              placeholder="CEP"
              pattern="(\d{2}\.\d{3}\-\d{3})"
              name="cep"
            />
            <input
              data-testid="checkout-address"
              type="text"
              placeholder="Endereço"
              name="address"
            />
          </div>
          <div>
            <h3>Método de pagamento</h3>
          </div>
          <button type="submit">Comprar</button>
        </form>
      </main>
    );
  }
}

export default Checkout;
