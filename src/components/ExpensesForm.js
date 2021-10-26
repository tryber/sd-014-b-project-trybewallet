import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense as addExpenseAction, saveCurrenciesThunk } from '../actions';
import CategorySelect from './CategorySelect';
import PaymentSelect from './PaymentSelect';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetInitialState = this.resetInitialState.bind(this);
  }

  componentDidMount() {
    const { saveCurrencies } = this.props;
    saveCurrencies();
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { addExpense, currencies, saveCurrencies } = this.props;
    await saveCurrencies();
    const { id, value, description, currency, method, tag } = this.state;
    const expenses = {
      id,
      value,
      currency: currency || 'USD',
      method: method || 'Cartão de crédito',
      tag: tag || 'alimentação',
      description,
      exchangeRates: currencies,
    };
    addExpense(expenses);
    this.resetInitialState();
  }

  resetInitialState() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    }));
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { handleChange, handleClick } = this;
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            value={ value }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            value={ currency }
            onChange={ (e) => handleChange(e) }
          >
            {
              Object.keys(currencies)
                .map((quote) => (
                  <option key={ quote }>{quote}</option>))
            }
          </select>
        </label>
        <PaymentSelect method={ method } handleChange={ handleChange } />
        <CategorySelect tag={ tag } handleChange={ handleChange } />
        <button type="button" onClick={ handleClick }>adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(addExpenseAction(payload)),
  saveCurrencies: () => dispatch(saveCurrenciesThunk()),
});

ExpensesForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  saveCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
