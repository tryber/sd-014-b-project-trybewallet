import React, { Component } from 'react';
import fetchEndPoint from '../service/API';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      currency: [],
    };

    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
  }

  componentDidMount() {
    this.getCurrencyApi();
  }

  async getCurrencyApi() {
    const response = await fetchEndPoint();
    const arrayCurrency = Object.keys(response);
    arrayCurrency.splice(arrayCurrency.indexOf('USDT'), 1);

    this.setState({ currency: arrayCurrency });
  }

  renderValue() {
    return (
      <label htmlFor="valor">
        Valor
        <input id="valor" type="number" name="valor" />
      </label>
    );
  }

  renderDescription() {
    return (
      <label htmlFor="descricao">
        Descrição
        <input id="descricao" type="text" name="descricao" />
      </label>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" name="moeda">
          {currency.map((e, i) => (
            <option key={ i } value={ e }>
              {' '}
              { e }
              {' '}
            </option>
          ))}
        </select>
      </label>
    );
  }

  renderPayment() {
    return (
      <label htmlFor="pagamento">
        Método de pagamento
        <select id="pagamento" name="pagamento">
          <option value="dinheiro">Dinheiro</option>
          <option value="credito">Cartão de crédito</option>
          <option value="debito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag">
          <option value="alimentacao"> Alimentacão</option>
          <option value="lazer"> Lazer</option>
          <option value="trabalho"> Trabalho</option>
          <option value="transporte"> Transporte</option>
          <option value="sauide">Saúde </option>

        </select>
      </label>
    );
  }

  render() {
    return (
      <section>
        <form>
          {this.renderValue()}
          {this.renderDescription()}
          {this.renderCurrency()}
          {this.renderPayment()}
          {this.renderTag()}
        </form>
      </section>
    );
  }
}

export default ExpenseForm;
