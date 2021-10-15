import React from 'react';
import { connect } from 'react-redux';
import SelectCurrencyForm from './SelectCurrencyForm';
import PaymentMethodForm from './PaymentMethodForm';
import CategoryOfExpenseForm from './CategoryOfExpenseForm';

class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="expense-form-label">
          Valor
          <input
            type="text"
            name="expense"
            id="expense-form-label"
          />
        </label>
        <label htmlFor="description-form-label">
          Descrição
          <input
            type="text"
            name="description"
            id="description-form-label"
          />
        </label>
        <SelectCurrencyForm />
        <PaymentMethodForm />
        <CategoryOfExpenseForm />
      </form>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(ExpenseForm);
