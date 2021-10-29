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
      currency: '',
      method: '',
      tag: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCoins = this.getCoins.bind(this);
    this.takeNewExpenseToAdd = this.takeNewExpenseToAdd.bind(this);
    this.resetState = this.resetState.bind(this);
    // this.handleChange = this.handleChange.bind(this);
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
    const { value, currency, method, tag, description } = this.state;

    const getGeneratedExpense = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: await fetchApiCoins(),
    };
    takeExpenses(getGeneratedExpense);
    this.resetState();
  }

  resetState() {
    this.setState({
      value: '',
      currency: '',
      method: '',
      tag: '',
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
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Select
          label="Moeda"
          name="currency"
          value={ currency }
          options={ arrayCoins }
          onChange={ this.handleChange }
        />
        <Select
          label="Método de pagamento"
          name="method"
          value={ method }
          options={ payment }
          onChange={ this.handleChange }
        />
        <Select
          label="Tag"
          name="tag"
          value={ tag }
          options={ tags }
          onChange={ this.handleChange }
        />
        <Input
          labelName="Descrição"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Button
          text="Adicionar despesa"
          onClick={ this.takeNewExpenseToAdd }
        />
      </form>
    );
  }
}

AddExpense.propTypes = {
  takeExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  takeExpenses: (expense) => dispatch(saveExpense(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
