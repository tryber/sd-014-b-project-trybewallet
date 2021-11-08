import PropTypes from 'prop-types';
import React from 'react';

import { connect } from 'react-redux';
import payments from '../../services/payments';
import expenditures from '../../services/expenditures';
import getCurrencies from '../../services/currenciesAPI';

import Input from '../Input/index';
import Select from '../Select';
import { setWalletData, setSpentTotal } from '../../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      coinsCode: [],
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setCoinsInState = this.setCoinsInState.bind(this);
  }

  async componentDidMount() {
    let currencies = await getCurrencies();
    delete currencies.USDT;
    currencies = Object.values(currencies);
    this.setCoinsInState(currencies);
  }

  setCoinsInState(currencies) {
    const coins = currencies.map((currency) => currency.code);
    this.setState({ coinsCode: [...coins] });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleClick() {
    const {
      dispatchSetWalletData, dispatchSetSpentTotal, expenses, spentTotal,
    } = this.props;

    const id = expenses.length;
    let exchangeRates = await getCurrencies();
    const { value, description, currency, method, tag } = this.state;

    const total = () => {
      exchangeRates = Object.values(exchangeRates);
      const exchangeRateCurrent = exchangeRates.find((exchangeRate) => (
        exchangeRate.code === currency
      ));

      const valueCurrent = value * exchangeRateCurrent.ask;
      return spentTotal + valueCurrent;
    };

    const expense = () => ({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });

    dispatchSetWalletData({ expenses: expense() });
    dispatchSetSpentTotal({ spentTotal: total() });
  }

  render() {
    const { value, description, currency, coinsCode, method, tag } = this.state;
    return (
      <form>
        <Input
          id="input-value"
          type="number"
          label="Valor"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          id="input-description"
          label="Descrição"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <Select
          id="select-currency"
          label="Moeda"
          name="currency"
          options={ coinsCode }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          id="select-method"
          name="method"
          label="Método de pagamento"
          options={ payments }
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          id="select-tag"
          name="tag"
          label="Tag"
          options={ expenditures }
          value={ tag }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  dispatchSetWalletData: PropTypes.func.isRequired,
  dispatchSetSpentTotal: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
  spentTotal: PropTypes.number.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetWalletData: (data) => dispatch(setWalletData(data)),
    dispatchSetSpentTotal: (total) => dispatch(setSpentTotal(total)),
  };
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
    spentTotal: state.wallet.spentTotal,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
