import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { emailInput } = this.props;
    const { email } = emailInput;
    return (
      <div>
        <header>
          <div>
            <p data-testid="email-field">
              {`Email: ${email}`}
            </p>
          </div>
          <div>
            <p data-testid="total-field">
              {`Despesa total: R$${0}`}
            </p>
            <p data-testid="header-currency-field">
              BRL
            </p>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailInput: state.user,
});

Wallet.propTypes = {
  emailInput: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Wallet);
