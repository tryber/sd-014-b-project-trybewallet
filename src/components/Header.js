import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const totalDespesas = expenses.reduce((acc, cureentValue) => {
      acc += cureentValue.value * cureentValue.exchangeRates[cureentValue.currency].ask;
      return acc;
    }, 0);

    return (
      <header>
        <section data-testid="email-field">{email}</section>
        <section data-testid="total-field">{ totalDespesas }</section>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapstateToProps = (state) => (
  { email: state.user.email,
    expenses: state.wallet.expenses,
  });

export default connect(mapstateToProps)(Header);
