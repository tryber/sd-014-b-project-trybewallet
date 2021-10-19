import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <main>
        <header>
          <h1 data-testid="email-field">{email}</h1>
          <span>Gasto Total: </span>
          <span data-testid="total-field"> 0 </span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
