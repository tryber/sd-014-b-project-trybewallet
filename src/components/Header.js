import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ email, expenses = [] }) => {
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    if (expenses === []) {
      setTotalValue(0);
    } else {
      const expenseValues = expenses.map((exp) => {
        const {
          value,
          currency,
          exchangeRates,
        } = exp;

        const result = value * exchangeRates[currency].ask;
        return (result);
      });
      const result = expenseValues.reduce((total, value) => total + value, 0);
      setTotalValue(Math.round(result * 100) / 100);
    }
  }, [expenses]);

  return (
    <header>
      <span data-testid="email-field">{`E-mail: ${email}`}</span>
      <span data-testid="total-field">
        {`Total: ${totalValue}`}
      </span>
      <span data-testid="header-currency-field">Moeda: BRL</span>
    </header>
  );
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape([]).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email, expenses: state.wallet.expenses });

export default connect(mapStateToProps)(Header);
