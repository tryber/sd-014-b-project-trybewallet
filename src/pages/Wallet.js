import React from 'react';
import Header from '../components/Header';
import InputBase from '../components/InputBase';
import getAPI from '../services/currencyAPI';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      currency: [],
    };
  }

  async componentDidMount() {
    this.atualizaEstado();
  }

  atualizaEstado = async () => {
    const api = await getAPI();
    const resultAPI = Object.keys(api);
    const USDT = resultAPI.indexOf('USDT');
    resultAPI.splice(USDT, 1);
    this.setState({
      currency: resultAPI,
    });
  }

  render() {
    const { currency } = this.state;
    return (
      <div>
        <Header />
        TrybeWallet
        <form>
          <InputBase name="Valor" type="number" />
          <InputBase name="Descrição" type="text" />
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              { currency.map((cambio) => <option key={ cambio } value={ cambio }>{ cambio }</option>) }
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </form>
      </div>);
  }
}

export default Wallet;
