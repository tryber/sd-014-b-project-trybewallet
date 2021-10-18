import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
    };
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((coins) => this.filterCoins(coins));
  }

  filterCoins(coins) {
    let siglasCoins = Object.keys(coins);
    siglasCoins = siglasCoins.filter((sig) => sig !== 'USDT');
    this.setState({ coins: siglasCoins });
  }

  render() {
    const { coins } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            { coins.map((coin, i) => (
              <option key={ i } value={ coin }>
                { coin }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento
          <select id="paymentMethod">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
