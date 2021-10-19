import React from 'react';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      coinsOptions: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    this.setState({
      coinsOptions: data,
    });
  }

  render() {
    const { coinsOptions } = this.state;
    console.log(coinsOptions);
    return (
      <form>
        <fieldset>
          <label htmlFor="value">
            Valor
            <input type="number" name="name" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="name" id="description" />
          </label>
          <label htmlFor="coin">
            Moeda
            <input type="text" name="name" id="coin" />
          </label>
          <label htmlFor="coins-options">
            Opções de Moedas
            <select id="coins-options">
              {
                Object.keys(coinsOptions).map((coin, index) => (
                  <option key={ index }>{coin}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento
            <select id="payment-method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </fieldset>
      </form>
    );
  }
}

export default ExpenseForm;
