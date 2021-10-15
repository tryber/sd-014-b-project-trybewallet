import React from 'react';
import { connect } from 'react-redux';
import SelectCurrencyForm from './SelectCurrencyForm';
import PaymentMethodForm from './PaymentMethodForm';
import CategoryOfExpenseForm from './CategoryOfExpenseForm';

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
        <label htmlFor="description-form-label">
          Descrição
          <input
            type="text"
            name="description"
            id="description-form-label"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
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
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(ExpenseForm);
