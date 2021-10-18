import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { email } = this.props; // email do estado que é passado por props la no login page que é o estado compartilhado.

    return (
      <div>
        TrybeWallet
        <section>
          <div>
            Email:
            <span data-testid="email-field">{email}</span>
          </div>
          <div>
            Despesa total: R$
            <span data-testid="total-field" />
          </div>
          <div data-testid="header-currency">BRL</div>
        </section>
      </div>
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
