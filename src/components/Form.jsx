import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  async requestCoins() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USD;
  }

  async handleClick() {
    const { saveExpenses, expenses } = this.props;
    const returnApi = await this.requestCoins();
    saveExpenses({ ...this.state, id: expenses.length, exchangeRates: returnApi });
  }

  render() {
    return (
      <form>
        <label htmlFor="input-value">
          Valor
          <input
            onChange={ this.handleClick }
            type="text"
            id="input-value"
            name="value"
          />
        </label>
        <label htmlFor="input-description">
          Descrição
          <input
            onChange={ this.handleClick }
            type="text"
            id="input-description"
            name="description"
          />
        </label>
        <label htmlFor="select-currency">
          Moeda
          <select id="select-currency" name="currency" onChange={ this.requestCoins }>
            {/* <option>Moeda</option> */}
          </select>
        </label>
        <label htmlFor="input-method">
          Método de pagamento
          <select id="input-method" name="method" onChange={ this.handleClick }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select id="input-tag" name="tag" onChange={ this.handleClick }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
        </label>
        <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  saveExpenses: PropTypes.func,
  expenses: PropTypes.string,
}.isRequired;

export default Form;
