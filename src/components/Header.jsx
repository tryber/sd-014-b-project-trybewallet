import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user, expenses } = this.props;
    const soniblein = expenses.reduce((acc, atual) => {
      acc += parseFloat(atual.value * atual.exchangeRates[atual.currency].ask);
      return acc;
    }, 0);
    return (
      <main>
        <header>
          <h3 data-testid="email-field">
            Email:
            {' '}
            { user }
          </h3>
          <h3
            data-testid="total-field"
          >
            Despesa Total:
            {' '}
            <span data-testid="header-currency-field">
              BRL
            </span>
            {' '}
            { soniblein }
          </h3>
        </header>
      </main>
    );
  }
}

Header.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.string.isRequired,
};

const mapDispatchToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapDispatchToProps, null)(Header);
