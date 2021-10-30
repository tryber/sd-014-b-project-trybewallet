import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';

import { tags, payment } from '../services/data';
import fetchApiCoins from '../services/requestApi';
import Button from './Button';
import { saveExpense } from '../actions/index';

class AddExpense extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayCoins: [],
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      id: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCoins = this.getCoins.bind(this);
    this.takeNewExpenseToAdd = this.takeNewExpenseToAdd.bind(this);
    this.resetState = this.resetState.bind(this);
    this.insertId = this.insertId.bind(this);
  }

  componentDidMount() {
    this.getCoins();
  }

  async getCoins() {
    const response = await fetchApiCoins();
    const coins = Object.keys(response)
      .filter((currency) => currency !== 'USDT' && currency !== 'DOGE');
    this.setState({
      arrayCoins: coins,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async takeNewExpenseToAdd() {
    const { takeExpenses } = this.props;
    const { id, value, currency, method, tag, description } = this.state;
    const getGeneratedExpense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: await fetchApiCoins(),
    };
    takeExpenses(getGeneratedExpense);
    this.insertId();
    this.resetState();
  }

  insertId() {
    const { idInExpenses } = this.props;
    const idLength = idInExpenses.length;

    this.setState({ id: idLength });
  }

  resetState() {
    this.setState({
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  }

  render() {
    const { arrayCoins, value, currency, method, tag, description } = this.state;
    return (
      <form>
        <Input
          labelName="Valor"
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          labelName="Descrição"
          type="text"
          id="description"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          label="Moeda"
          id="currency"
          name="currency"
          value={ currency }
          options={ arrayCoins }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento"
          id="method"
          name="method"
          value={ method }
          options={ payment }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag"
          id="tag"
          name="tag"
          value={ tag }
          options={ tags }
          onChange={ this.handleChange }
        />
        <Button text="Adicionar despesa" onClick={ this.takeNewExpenseToAdd } />
      </form>
    );
  }
}

AddExpense.propTypes = {
  takeExpenses: PropTypes.func.isRequired,
  idInExpenses: PropTypes.arrayOf.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  takeExpenses: (expense) => dispatch(saveExpense(expense)),
});

const mapStateToProps = (state) => ({
  idInExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
