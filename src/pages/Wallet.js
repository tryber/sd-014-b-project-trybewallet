import React from 'react';
import Header from '../components/Header';
import TableExpenses from '../components/TableExpenses';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
    delete data.USDT;
    this.setState({
      coins: data,
    });
  }

  render() {
    const { coins } = this.state;
    return (
      <section>
        <Header />
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>
          <label htmlFor="coin">
            Moeda
            <select type="text" name="coin" id="coin">
              { Object.keys(coins)
                .map((coin) => <option key={ coin }>{ coin }</option>) }
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de Pagamento
            <select type="text" name="payment-method" id="payment-method">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select type="text" name="tag" id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
        <TableExpenses />
      </section>
    );
  }
}

export default Wallet;
