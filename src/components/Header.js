import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();

    this.totalValeu = this.totalValeu.bind(this);
  }

  totalValeu() {
    const { expenses } = this.props;
    const totalValue = expenses.reduce((acc, expense) => {
      const currencyValue = Number(expense.exchangeRates[expense.currency].ask);
      acc += Number(expense.value) * currencyValue;
      return acc;
    }, 0);
    return totalValue;
  }

  render() {
    const { totalValeu } = this;
    const { email } = this.props;
    return (
      <header>
        <div data-testid="email-field">
          Email:
          {' '}
          {email}
        </div>
        <div>
          <div data-testid="total-field">
            {totalValeu().toFixed(2)}
          </div>
          <div data-testid="header-currency-field">BRL</div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user: { email }, wallet: { expenses } }) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
