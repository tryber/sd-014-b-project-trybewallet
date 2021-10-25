import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveExpensesInState } from '../actions';
import Inputs from './Inputs';
import SelectCoin from './SelectCoin';

class FormWallet extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'dinheiro',
      tag: 'alimentacao',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeInputs = this.handleChangeInputs.bind(this);
  }

  handleChangeInputs({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async requestCoins() {
    const endPoint = 'https://economia.awesomeapi.com.br/json/all';
    const jsonObj = await (await fetch(endPoint)).json();
    return jsonObj;
  }

  async handleClick() {
    const { saveExpenses, expenses } = this.props;
    const returnApi = await this.requestCoins();
    saveExpenses({ ...this.state, id: expenses.length, exchangeRates: returnApi });
  }

  render() {
    const { coins } = this.props;
    return (
      <div>
        <form>
          <Inputs
            handleChange={ this.handleChangeInputs }
            type="text"
            id="input-value"
            name="value"
            textLabel="Valor: "
          />
          <Inputs
            handleChange={ this.handleChangeInputs }
            type="text"
            id="2"
            name="description"
            textLabel="Descrição: "
          />
          <SelectCoin
            id="3"
            textLabel="Moeda:"
            handleChange={ this.handleChangeInputs }
            nameSelect="currency"
            coins={ coins }
          />
          <label htmlFor="input-method">
            Método de pagamento
            <select id="input-method" name="method" onChange={ this.handleChangeInputs }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="input-tag">
            Tag
            <select id="input-tag" name="tag" onChange={ this.handleChangeInputs }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saude">Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </div>
    );
  }
}

FormWallet.propTypes = {
  coins: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  saveExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (state) => dispatch(saveExpensesInState(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
