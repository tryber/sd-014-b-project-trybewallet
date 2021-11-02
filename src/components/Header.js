import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user, savedExpenses } = this.props;

    const finalValue = savedExpenses.reduce((acc, cur) => {
      acc += cur.value * cur.exchangeRates[cur.currency].ask;
      return acc;
    }, 0);
    // Referência para a soma dos valores: https://github.com/tryber/sd-014-b-project-trybewallet/pull/69/files

    return (
      <header>
        <p data-testid="email-field">{`Usuário: ${user}`}</p>
        <p data-testid="total-field">{`Total: ${finalValue.toFixed(2)}`}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.string.isRequired,
  savedExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  savedExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
