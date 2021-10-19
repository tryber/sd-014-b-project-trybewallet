import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { expenses, currency } = this.state;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <span data-testid="email-field">{`Bem vindo(a) ${email}`}</span>
        <div
          data-testid="total-field"
        >
          {`Despesas: ${expenses}`}
          <span data-testid="header-currency-field">{currency}</span>
        </div>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
