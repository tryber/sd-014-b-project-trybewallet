import React, { Component } from 'react';
import AmountInput from './AmountInput';
import CurrencyInput from './CurrencyInput';
import DescriptionInput from './DescriptionInput';
import ExpenseTypeInput from './ExpenseTypeInput';
import PayMethodInput from './PayMethodInput';

class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <AmountInput />
        <DescriptionInput />
        <CurrencyInput />
        <PayMethodInput />
        <ExpenseTypeInput />
      </form>
    );
  }
}

export default ExpenseForm;
