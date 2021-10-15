import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { globalStateEmail } = this.props;
    return (
      <div>
        <Header dataTestId="email-field" email={ globalStateEmail } />
        <div data-testid="total-field">0</div>
        <div data-testid="header-currency-field">BRL</div>
      </div>);
  }
}

Wallet.propTypes = {
  globalStateEmail: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    globalStateEmail: state.user.email,
  };
}
export default connect(mapStateToProps)(Wallet);
