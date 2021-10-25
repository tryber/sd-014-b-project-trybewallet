import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import FormCost from './FormCost';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <h1>trybe Wallet</h1>
        <h4 data-testid="email-field">{ email }</h4>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
        <div>
          <FormCost />
        </div>

      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
