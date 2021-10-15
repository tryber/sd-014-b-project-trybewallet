import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/header.module.scss';

function Header({ email, totalValue }) {
  return (
    <header className={ styles.header }>
      <div className={ styles.emailField } data-testid="email-field">
        Email:
        {' '}
        {email}
      </div>
      <div className={ styles.totalValueDiv }>
        <div data-testid="total-field">{totalValue}</div>
        <div data-testid="header-currency-field">BRL</div>
      </div>
    </header>
  );
}

const mapStateToProps = ({ user: { email }, wallet: { totalValue } }) => ({
  email,
  totalValue,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalValue: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
