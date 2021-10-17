import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { currency, email, expenses } = this.props;
    return (
      <header>
        <p>Email:</p>
        <span data-testid="email-field">{ email }</span>
        <p>Despesa Total:</p>
        <span data-testid="total-field">{ expenses }</span>
        <span data-testid="header-currency-field">{ currency }</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  currency: PropTypes.string,
  email: PropTypes.string,
  expenses: PropTypes.number,
};

Wallet.defaultProps = {
  currency: 'BRL',
  email: '',
  expenses: 0,
};
