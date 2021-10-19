import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.Expenses = this.Expenses.bind(this);
  }

  // A lógica para essa função foi feita por Luana Moneró, Src: https://github.com/tryber/sd-014-b-project-trybewallet/pull/9
  Expenses(expenses) {
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
      <header>
        <span data-testid="email-field">{`Email: ${email}`}</span>
        <span
          data-testid="total-field"
        >
          {`Despesa Total: R$ ${this.Expenses(expenses)}`}
          <span data-testid="header-currency-field">BRL</span>
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps)(Header);
