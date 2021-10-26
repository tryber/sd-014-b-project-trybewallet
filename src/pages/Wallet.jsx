import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, sendExpensesInfo, setTotalExpenses } from '../actions';
import Input from '../components/Input';
import Select from '../components/Select';
import { payMethods, tags } from '../helpers';
import getCurrencyInfo from '../services/currencyAPI';
import Header from '../components/Header';

class Wallet extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      totalExpenses: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { fetchCurrenciesToProps } = this.props;
    fetchCurrenciesToProps();
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleButtonClick() {
    const { expenses, sendExpensesToProps, addTotalExpenses } = this.props;
    const { value } = this.state;
    const response = await getCurrencyInfo();
    sendExpensesToProps({ ...this.state, id: expenses.length, exchangeRates: response });
    addTotalExpenses(value);
  }

  render() {
    const { props: { userEmail, walletCurrencies, expenses }, state: {
      value, description, currency, method, tag },
    handleInputChange, handleButtonClick } = this;
    return (
      <section>
        <Header userEmail={ userEmail } expenses={ expenses } />
        <form>
          <Input
            type="text"
            name="value"
            value={ value }
            onChange={ handleInputChange }
          />
          <Input
            type="text"
            name="description"
            value={ description }
            onChange={ handleInputChange }
          />
          <Select
            name="currency"
            value={ currency }
            options={ walletCurrencies.filter((optCurrency) => optCurrency !== 'USDT') }
            onChange={ handleInputChange }
          />
          <Select
            name="method"
            value={ method }
            options={ payMethods }
            onChange={ handleInputChange }
          />
          <Select
            name="tag"
            value={ tag }
            options={ tags }
            onChange={ handleInputChange }
          />
          <button name="adicionar despesa" type="button" onClick={ handleButtonClick }>
            Adicionar despesa
          </button>
        </form>
      </section>
    );
  }
}

Wallet.propTypes = {
  addTotalExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchCurrenciesToProps: PropTypes.func.isRequired,
  sendExpensesToProps: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  walletCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletCurrencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  totalExpenses: state.wallet.totalExpenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesToProps: () => dispatch(fetchCurrencies()),
  sendExpensesToProps: (expenses) => dispatch(sendExpensesInfo(expenses)),
  addTotalExpenses: (totalExpenses) => dispatch(setTotalExpenses(totalExpenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
