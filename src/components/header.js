import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses(expenses) {
    if (expenses.length !== 0) {
      const somaTotal = expenses.reduce((acc, curr) => {
        acc += Number(curr.value) * curr.exchangeRates[curr.currency].ask;
        return acc;
      }, 0);
      return somaTotal.toFixed(2);
    }
    return 0.00;
  }

  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span data-testid="total-field">
          Despesa: R$
          {' '}
          { this.totalExpenses(expenses) }
        </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>);
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
