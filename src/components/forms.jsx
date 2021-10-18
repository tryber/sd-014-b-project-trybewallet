import React from 'react';
import returnApi from '../services/apiRequest';

class Forms extends React.Component {
  constructor() {
    super();

    this.getApiFromServices = this.getApiFromServices.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);

    this.state = {
      resultsApi: [],
      arrayCoins: [],
    };
  }

  componentDidMount() {
    this.getApiFromServices();
  }

  async getApiFromServices() {
    const results = await returnApi();
    this.setState({
      resultsApi: [results],
    });
    this.getCurrencies();
  }

  getCurrencies() {
    const { resultsApi } = this.state;
    resultsApi.map((element) => (
      this.setState({
        arrayCoins: (Object.keys(element)),
      })
    ));
  }

  render() {
    const { arrayCoins } = this.state;
    console.log(arrayCoins);
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" name="name" />
        </label>
        <label htmlFor="Descrição">
          Descrição:
          <input id="Descrição" type="text" name="name" />
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda">
            { arrayCoins.map((currencie) => {
              if (currencie !== 'USDT') {
                return (
                  <option key={ currencie } value={ currencie }>
                    { currencie }
                  </option>
                );
              }
              return '';
            }) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesa">
          Tag:
          <select id="despesa">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Forms;
