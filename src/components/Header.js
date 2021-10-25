import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, despesaTotal } = this.props;

    return (
      <header>
        <section data-testid="email-field">{email}</section>
        <section data-testid="total-field">{ despesaTotal }</section>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  despesaTotal: PropTypes.number.isRequired,
};

const mapstateToProps = (state) => (
  { email: state.user.email,
    despesaTotal: state.wallet.despesaTotal,
  });

export default connect(mapstateToProps)(Header);
