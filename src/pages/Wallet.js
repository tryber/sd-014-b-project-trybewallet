import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses, currency } = this.state;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">{ totalExpenses }</span>
        <span data-testid="header-currency-field">{ currency }</span>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
