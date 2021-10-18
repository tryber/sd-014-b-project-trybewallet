import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      moedaInfo: [],
      // moedasObjects: [],
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    // const USDT = 'Dólar Americano/Real Brasileiro Turismo';
    try {
      const urlPatch = 'https://economia.awesomeapi.com.br/json/all';
      const fetchApi = await fetch(urlPatch);
      const returnApi = await fetchApi.json();
      this.setState({
        moedaInfo: Object.keys(returnApi).filter((code) => code !== 'USDT'),
        // moedasObjects: Object.values(returnApi).filter(({ code }) => code !== USDT),
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { moedaInfo } = this.state;
    if (moedaInfo.length === 0) {
      return (
        <p>Loading...</p>
      );
    }
    return (
      <>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="text" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input id="descricao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              {moedaInfo.map(
                (code) => <option value={ code } key={ code }>{code}</option>,
              )}
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default Wallet;
