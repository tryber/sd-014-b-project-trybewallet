import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        <header>
          <span data-testid="email-field">{ `E-mail: ${email}` }</span>
          <span data-testid="total-field">R$00.00</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
      </section>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(Wallet);
