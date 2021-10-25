import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpenseAction } from '../../actions/addExpenseAction';
import Select from '../Select';
import { tagOptions, methodOptions } from '../Select/options';
import { fetchCurrencies } from '../../actions/currenciesAction';

class Form extends Component {
  constructor(props) {
    super(props);
    const { exchangeRates } = props;
    this.state = {
      value: '3',
      description: 'Hot Dog',
      currency: 'BTC',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates,
    };

    this.addExpense = this.addExpense.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async addExpense() {
    const { nextID, addExpenseToState, getCurrencies } = this.props;
    await getCurrencies();
    addExpenseToState({ id: nextID, ...this.state });
  }

  renderDescriptionAndValue() {
    const { value, description } = this.state;
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            name="value"
            type="number"
            id="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            name="description"
            type="text"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }

  render() {
    const { currencies } = this.props;
    const { currency, method, tag } = this.state;
    return (
      <form>
        { this.renderDescriptionAndValue() }
        <Select
          id="currency"
          value={ currency }
          options={
            Object.keys(currencies).map((key) => ({ value: key, name: key }))
          }
          onChange={ this.handleChange }
        >
          Moeda
        </Select>
        <Select
          id="method"
          value={ method }
          options={ methodOptions }
          onChange={ this.handleChange }
        >
          Método de pagamento
        </Select>
        <Select
          id="tag"
          value={ tag }
          options={ tagOptions }
          onChange={ this.handleChange }
        >
          Tag
        </Select>
        <button onClick={ this.addExpense } type="button">Adicionar despesa</button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  nextID: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  nextID: state.wallet.nextID,
  exchangeRates: state.currenciesReducer.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseToState: (expense) => dispatch(addExpenseAction(expense)),
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
