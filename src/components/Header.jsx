import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">
          Total: R$
          {' '}
          { expenses.reduce((acc, curr) => {
            const value = Number(curr.value);
            const currentQuotation = Number(curr.exchangeRates[curr.currency].ask);
            return acc + (value * currentQuotation);
          }, 0) }

        </span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
//  agradecimentos ao aluno Michael Caxias.
