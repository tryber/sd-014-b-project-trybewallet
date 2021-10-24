import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AmountInput from './AmountInput';
import CurrencyInput from './CurrencyInput';
import DescriptionInput from './DescriptionInput';
import ExpenseTypeInput from './ExpenseTypeInput';
import PayMethodInput from './PayMethodInput';
import { addExpense } from '../actions/index';
import getCurrencies from '../services/currencyApi';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleClick() {
    const exchangeRates = await getCurrencies();
    const { sendExpense } = this.props;
    sendExpense({ ...this.state, exchangeRates });
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  render() {
    const { amount, description, coin, method, tag } = this.state;
    return (
      <form>
        <AmountInput value={ amount } handleChange={ this.handleChange } />
        <DescriptionInput value={ description } handleChange={ this.handleChange } />
        <CurrencyInput value={ coin } handleChange={ this.handleChange } />
        <PayMethodInput value={ method } handleChange={ this.handleChange } />
        <ExpenseTypeInput value={ tag } handleChange={ this.handleChange } />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  sendExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendExpense: (allState) => dispatch(addExpense(allState)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
