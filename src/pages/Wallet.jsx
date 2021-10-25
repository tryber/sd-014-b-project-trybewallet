import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, fetchExchangeRates, sendExpensesInfo } from '../actions';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      // currentExpense: [],
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      actualCurrency: 'BRL',
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

  handleButtonClick() {
    const { fetchExchangeRatesToProps, sendExpansesToProps } = this.props;
    fetchExchangeRatesToProps();
    sendExpansesToProps(this.state);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { props: { userEmail, walletCurrencies }, state: {
      totalExpenses, actualCurrency, value, description, currency, method, tag },
    handleInputChange, handleButtonClick } = this;
    const payMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <section>
        <header>
          <span data-testid="email-field">{ userEmail }</span>
          <span data-testid="total-field">{ totalExpenses }</span>
          <span data-testid="header-currency-field">{ actualCurrency }</span>
        </header>
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
          <button
            name="adicionar despesa"
            type="button"
            onClick={ handleButtonClick }
          >
            Adicionar despesa

          </button>
        </form>
      </section>
    );
  }
}

Wallet.propTypes = {
  fetchCurrenciesToProps: PropTypes.func.isRequired,
  fetchExchangeRatesToProps: PropTypes.func.isRequired,
  sendExpansesToProps: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  walletCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletCurrencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesToProps: () => dispatch(fetchCurrencies()),
  fetchExchangeRatesToProps: () => dispatch(fetchExchangeRates()),
  sendExpansesToProps: (expenses) => dispatch(sendExpensesInfo(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
