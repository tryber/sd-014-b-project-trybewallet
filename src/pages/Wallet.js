import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total_expensive: 0,
    }
  }
  render() {
    const { getEmail } = this.props;
    const { total_expensive } = this.state;
    return (
      <header>
        <p data-testid="email-field">{ getEmail }</p>
        <p data-testid="total-field">{ `Despesa Total: ${ total_expensive }` }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    )
  }
}


const mapStateToProps = (state) => ({
  getEmail: state.user.email,
})

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
}

export default connect(mapStateToProps)(Wallet);
