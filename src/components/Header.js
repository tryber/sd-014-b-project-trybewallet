import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { usuario, gastos } = this.props;

    const totalGasto = gastos
      ? gastos
        .reduce((acc, { value, currency, exchangeRates }) => acc + value
          * exchangeRates[currency].ask, 0) : 0;

    return (
      <header>
        <p data-testid="email-field">
          { usuario }
        </p>
        <p data-testid="total-field">
          { totalGasto.toFixed(2) }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  usuario: PropTypes.string.isRequired,
  gastos: PropTypes.arrayOf(PropTypes.Object).isRequired,
};

const mapStateToProps = (state) => ({
  usuario: state.usuario.email,
  gastos: state.carteira.expenses,
});

export default connect(mapStateToProps)(Header);
