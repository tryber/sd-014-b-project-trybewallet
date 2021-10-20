import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { login } = this.props;
    const { email } = login;
    return (
      <div>
        <header>
          <h4 data-testid="email-field">{email}</h4>
          <h4 data-testid="total-field">0</h4>
          <h4 data-testid="header-currency-field">BRL</h4>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user,
});

WalletHeader.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
