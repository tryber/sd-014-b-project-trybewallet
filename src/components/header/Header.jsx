import React from 'react';
import PropTypes from 'prop-types';

function sumExpenses(expenses) {
  const sum = expenses
    .map(
      (expense) => parseInt(expense.value, 10)
        * expense.exchangeRates[expense.currency].ask,
    )
    .reduce((acc, cur) => acc + cur, 0);
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(sum)
    .replace(',', '.');
}

export default function Header(props) {
  const { children: form, email, expenses } = props;

  return (
    <>
      <header>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">
          {`Despesa Total: ${sumExpenses(expenses)}`}
          <span data-testid="header-currency-field">BRL</span>
        </span>
      </header>
      {form}
    </>
  );
}

Header.propTypes = {
  children: PropTypes.func,
  email: PropTypes.string,
}.isRequired;
