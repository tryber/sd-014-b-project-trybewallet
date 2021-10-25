import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  totalSumExpenses() {
    const { expenses } = this.props;
    const totalSum = expenses.reduce((initVal, currVal) => {
      initVal += Number(currVal.value) * currVal.exchangeRates[currVal.currency].ask;
      return initVal;
    }, 0);
    return totalSum.toFixed(2);
  }
  // o reduce acessa as informaçoes do estado de expenses através de props
  // currVal.exchangeRates[currVal.currency].ask; exchangeRates é o retorno da API
  // 'ask' é uma propriedade de cada objeto do retorno da API
  // cada objeto é uma moeda

  render() {
    const { userEmail } = this.props;
    return (
      <main>
        <p data-testid="email-field">{`Email:${userEmail}`}</p>
        <span data-testid="header-currency-field">
          Cambio: BRL
        </span>
        <span data-testid="total-field">
          {`Despesas: R$ ${this.totalSumExpenses()}`}
        </span>
      </main>
    );
  }
}

// const mapStateToProps = (state) => ({
//   userEmail: state.reducer.email } // aqui tava dando errado porque o reducer chama user e nao reducer
// );

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

// reduce:
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
