import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense as addExpenseAction } from '../actions';
import fetchQuotes from '../services';
import CategorySelect from './CategorySelect';
import PaymentSelect from './PaymentSelect';

class ExpensesForm extends Component {
  constructor() {
    super();

    this.state = {
      quotes: {},
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.requestQuotes = this.requestQuotes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.requestQuotes();
  }

  async requestQuotes() {
    const quotes = await fetchQuotes();
    delete quotes.USDT;
    this.setState({
      quotes,
    });
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  async handleClick() {
    const { addExpense } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    const expenses = {
      id,
      value,
      description,
      currency: currency || 'USD',
      method: method || 'dinheiro',
      tag: tag || 'alimentação',
      exchangeRates: await fetchQuotes(),
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
    const { quotes, value, description, currency, method, tag } = this.state;
    const { handleChange, handleClick } = this;

    return (
      <form>
        <label htmlFor="value">
          valor
          <input
            type="text"
            id="value"
            value={ value }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="description">
          descrição
          <input
            type="text"
            id="description"
            value={ description }
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="currency">
          moeda
          <select
            id="currency"
            value={ currency }
            onChange={ (e) => handleChange(e) }
          >
            {
              Object.keys(quotes)
                .map((quote) => (
                  <option key={ quote }>{quote}</option>))
            }
          </select>
        </label>
        <PaymentSelect method={ method } handleChange={ (e) => handleChange(e) } />
        <CategorySelect tag={ tag } handleChange={ (e) => handleChange(e) } />
        <button type="button" onClick={ handleClick }>adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(addExpenseAction(payload)),
});

ExpensesForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpensesForm);
