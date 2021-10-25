import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  calculateTotal() {
    const { expenses } = this.props;
    const result = expenses.reduce((acc, cur) => (
      cur.value * cur.exchangeRates[cur.currency].ask + acc
    ), 0);
    return result;
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <section>
          <span data-testid="email-field">{ email }</span>
        </section>
        <section>
          <span data-testid="total-field">{ this.calculateTotal() }</span>
          <span data-testid="header-currency-field">BRL</span>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
