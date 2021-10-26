import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  getTotalFields() {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    const totalField = expenses.reduce((acc, curr) => {
      const valor = curr.value;
      const coin = curr.currency;
      const getAsk = curr.exchangeRates[coin].ask;
      const total = valor * getAsk;
      acc += total;
      return acc;
    }, 0);
    return totalField;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header className="header">
        <p data-testid="email-field">{userEmail}</p>
        <p data-testid="total-field">{this.getTotalFields()}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
