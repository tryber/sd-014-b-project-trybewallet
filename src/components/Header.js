import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     total: 0,
  //   };
  // }

  // totalExpenses = () => {
  //   const { expenses } = this.props;
  //   let totalExpenses = 0;
  //   if (expenses.length > 0) {
  //     expenses.forEach((element) => {
  //       const currencyOne = element.currency;
  //       console.log(element.value);
  //       totalExpenses = element.value * [element.exchangeRates[currencyOne].ask];
  //     });
  //   }
  //   this.saveState(totalExpenses);
  // }

  // saveState = (gastos) => {
  //   this.setState({
  //     total: gastos,
  //   });
  // }

  render() {
    const { email, total } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ total }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number,

};

Header.defaultProps = {
  total: 0,
};

export default connect(mapStateToProps)(Header);
