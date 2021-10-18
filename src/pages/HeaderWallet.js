import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderWallet extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">0</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapState = (state) => ({
  email: state.user.email,
});

export default connect(mapState)(HeaderWallet);
