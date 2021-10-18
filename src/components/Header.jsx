import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      return 0;
    }
    return expenses;
  }

  render() {
    const { mail } = this.props;
    return (
      <header data-testid="header-currency-field">
        <div data-testid="email-field">
          {`Email: ${mail}`}
        </div>
        <div data-testid="total-field">
          {`Dispesas Totais R&${this.totalExpenses()} BRL`}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  mail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  expenses: PropTypes.number.isRequired,
  mail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
