import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ emailUser.email }</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user,
});

Wallet.propTypes = {
  email: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, null)(Wallet);
