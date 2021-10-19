import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import walletLogo from '../../images/wallet.png';

function Header({ user, expenses }) {
  const totalValue = expenses.reduce((acc, { value, currency, exchangeRates }) => {
    const quotation = exchangeRates[currency].ask;
    return acc + (value * quotation);
  }, 0);

  return (
    <header className="header">
      <img src={ walletLogo } draggable={ false } alt="logo" />
      <section className="email-total-field">
        <span data-testid="email-field">{`Email: ${user}`}</span>
        <section>
          <span data-testid="total-field">{`R$ ${totalValue}`}</span>
          <span data-testid="header-currency-field">BRL</span>
        </section>
      </section>
    </header>
  );
}

Header.propTypes = {
  expenses: PropTypes.shape({
    reduce: PropTypes.func,
  }).isRequired,
  user: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
