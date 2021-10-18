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
      expenseCategory: 'Alimentação',
      paymentMethod: 'Dinheiro',
      currencySelected: 'USD',
      expense: '',
      description: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      expenseCategory,
      paymentMethod,
      currencySelected,
      expense,
      description } = this.state;
    const { expenses } = this.props;

    return (
      <form>
        <label htmlFor="expense-form-label">
          Valor
          <input
            type="text"
            name="expense"
            id="expense-form-label"
            onChange={ this.handleChange }
            value={ expense }
          />
        </label>
        <DescriptionLabel onChange={ this.handleChange } value={ description } />
        <SelectCurrencyForm
          onChange={ this.handleChange }
          value={ currencySelected }
          name="currencySelected"
        />
        <PaymentMethodForm
          onChange={ this.handleChange }
          value={ paymentMethod }
          name="paymentMethod"
        />
        <CategoryOfExpenseForm
          onChange={ this.handleChange }
          value={ expenseCategory }
          name="expenseCategory"
        />
        <button
          type="button"
          onClick={ () => expenses(this.state) }
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
