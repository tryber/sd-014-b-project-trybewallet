import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: '',
      expenseTotalLength: 0,
    };
  }

  componentDidMount = () => {
    this.totalExpenses();
  };

  componentDidUpdate = () => {
    const { expenses } = this.props;
    const { expenseTotalLength } = this.state;
    if (expenses.length > expenseTotalLength) {
      this.totalExpenses();
    }
    if (expenses.length < expenseTotalLength) {
      this.totalExpenses();
    }
  };

  totalExpenses = () => {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      const totalExpenses = expenses.reduce((
        total, expense,
      ) => total + Number(
        expense.value * expense.exchangeRates[expense.currency].ask,
      ), 0);
      this.setState({
        totalExpenses,
        expenseTotalLength: expenses.length,
      });
    }
  };

  render() {
    const { email } = this.props;
    const { totalExpenses } = this.state;
    return (
      <header>
        <h1>Projeto TrybeWallet</h1>
        <div>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">
            { totalExpenses > 0 ? totalExpenses.toFixed(2) : 0 }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf((
    PropTypes.any
  )).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
