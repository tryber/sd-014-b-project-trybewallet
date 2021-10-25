import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'BRL',
    };
  }

  handleExpenses() {
    const { expenses } = this.props;
    const expense = expenses.reduce((acc, cur) => {
      acc += cur.exchangeRates[cur.currency].ask * cur.value;
      return acc;
    }, 0);
    return expense;
  }

  render() {
    const { email } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <span data-testid="email-field">{`Bem vindo(a) ${email}`}</span>
          <div
            data-testid="total-field"
          >
            {`Despesas: ${this.handleExpenses()}`}
            <span data-testid="header-currency-field">{currency}</span>
          </div>
        </header>
        <Forms />
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Wallet);
