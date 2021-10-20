import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';
import TableRows from './TableRows';

import { reduceTotal } from '../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.getTotal = this.getTotal.bind(this);
  }

  componentDidUpdate() {
    this.getTotal();
  }

  getTotal() {
    const { reduceTotals, expenseList } = this.props;
    const conversions = [];
    expenseList.forEach((expense) => {
      const { currency, exchangeRates } = expense;
      const rate = Object.entries(exchangeRates).find(
        (array) => array[0] === currency,
      )[1]
        .ask;
      const conversion = (expense.value * rate).toFixed(2);
      conversions.push(Number(conversion));
      const total = conversions.reduce((a, b) => a + b);
      reduceTotals(total);
    });
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          { expenses.map((expense) => (
            <TableRows key={ expense.id } expenses={ expense } />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  expenseList: state.wallet.expenses,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  reduceTotals: (value) => dispatch(reduceTotal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  expenseList: PropTypes.arrayOf(PropTypes.any).isRequired,
  reduceTotals: PropTypes.func.isRequired,
};

Table.defaultProps = {

};
