import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectCurrencyForm from './SelectCurrencyForm';
import PaymentMethodForm from './PaymentMethodForm';
import CategoryOfExpenseForm from './CategoryOfExpenseForm';
import { getExpensesInfo } from '../actions';
import DescriptionLabel from './DescriptionLabel';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClickExpenses = this.onClickExpenses.bind(this);
  }

  async onClickExpenses() {
    const { id } = this.state;
    const { expenses } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencies = await response.json();
    this.setState({
      exchangeRates: currencies,
    });
    expenses(this.state);
    this.setState({
      id: id + 1,
    });
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      tag,
      method,
      currency,
      value,
      description } = this.state;

    return (
      <form>
        <label htmlFor="value-form-label">
          Valor
          <input
            type="text"
            name="value"
            id="value-form-label"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <DescriptionLabel onChange={ this.handleChange } value={ description } />
        <SelectCurrencyForm
          onChange={ this.handleChange }
          value={ currency }
          name="currency"
        />
        <PaymentMethodForm
          onChange={ this.handleChange }
          value={ method }
          name="method"
        />
        <CategoryOfExpenseForm
          onChange={ this.handleChange }
          value={ tag }
          name="tag"
        />
        <button
          type="button"
          onClick={ () => this.onClickExpenses() }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (state) => dispatch(getExpensesInfo(state)),
});

ExpenseForm.propTypes = {
  expenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
