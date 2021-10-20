import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from './Button';
import Input from './Input';
import Select from './Select';

import { addNewExpense, fetchEconomiaAPI } from '../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'USD',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.treatCurrencyList = this.treatCurrencyList.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit() {
    const { fetchCurrencies } = this.props;
    await fetchCurrencies();
    const { currency, description, method, tag, value } = this.state;
    const { addExpense, expenses } = this.props;
    const { currencies } = this.props;
    const newExpense = {
      id: expenses.length,
      currency,
      description,
      method,
      tag,
      value,
      exchangeRates: currencies,
    };
    await addExpense(newExpense);
  }

  treatCurrencyList() {
    const { currencies } = this.props;
    const currencyOptions = [];
    Object.entries(currencies)
      .filter((currency) => currency[0] !== 'USDT')
      .map((currency) => currencyOptions.push(currency[0]));
    return currencyOptions;
  }

  render() {
    const { currency, description, method, tag, value } = this.state;
    const currencyOptions = this.treatCurrencyList();
    const methodOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          label="Valor"
          name="value"
          onChange={ this.handleChange }
          type="number"
          value={ value }
          required
        />
        <Input
          label="Descrição"
          name="description"
          onChange={ this.handleChange }
          type="text"
          value={ description }
        />
        <Select
          label="Moeda"
          name="currency"
          onChange={ this.handleChange }
          options={ currencyOptions }
          value={ currency }
        />
        <Select
          label="Método de pagamento"
          name="method"
          onChange={ this.handleChange }
          options={ methodOptions }
          value={ method }
        />
        <Select
          label="Tag"
          name="tag"
          onChange={ this.handleChange }
          options={ tagOptions }
          value={ tag }
        />
        <Button
          label="Adicionar Despesa"
          onClick={ this.handleSubmit }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (object) => dispatch(addNewExpense(object)),
  fetchCurrencies: () => dispatch(fetchEconomiaAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.any),
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

Form.defaultProps = {
  currencies: {},
};
