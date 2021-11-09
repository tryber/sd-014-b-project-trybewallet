import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.verifyTotalExpenses = this.verifyTotalExpenses.bind(this);
  }

  componentDidMount() {
    this.verifyTotalExpenses();
  }

  componentDidUpdate() {
    this.verifyTotalExpenses();
  }

  verifyTotalExpenses() {
    const { expenses } = this.props;
    if (expenses.length === 0) {
      return 0.00;
    }
    const arrayWithNumber = [];
    expenses.forEach((element) => {
      const number = parseFloat(element.value).toFixed(2);
      const currencyActual = element.exchangeRates[element.currency];
      arrayWithNumber.push(parseFloat(number * currencyActual.ask));
    });
    const numberFinal = arrayWithNumber
      .reduce((numPrim, anotherNum) => numPrim + anotherNum, 0);
    return numberFinal.toFixed(2);
  }

  render() {
    const { emailValue } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <div className="container">
          <h1 data-testid="email-field">
            Email:
            { emailValue }
          </h1>
          <h1 data-testid="total-field">
            Despesa Total: R$
            { ' ' }
            { this.verifyTotalExpenses() }
          </h1>
          <h1 data-testid="header-currency-field">BRL</h1>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  emailValue: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  emailValue: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
