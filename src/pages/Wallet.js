import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { fetchApi } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();
    this.setTotalExpenses = this.setTotalExpenses.bind(this);
  }

  componentDidMount() {
    const { requestApi } = this.props;
    requestApi();
  }

  setTotalExpenses() {
    const { expenses } = this.props;
    const totalExpenses = 0;
    if (expenses.length > 0) {
      const sum = expenses.reduce((acc, curr) => {
        acc += Number(curr.value) * curr.exchangeRates[curr.currency].ask;
        return acc;
      }, 0);
      return sum;
    }
    return totalExpenses;
  }

  render() {
    const { user } = this.props;
    return (

      <section>
        <header>
          <header data-testid="email-field">
            { user }
            <p data-testid="total-field">{ this.setTotalExpenses() }</p>
          </header>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <ExpenseForm />
      </section>

    );
  }
}
Wallet.propTypes = {
  user: PropTypes.string.isRequired,
  requestApi: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
