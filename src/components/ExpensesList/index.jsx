import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Expense from '../Expense';

class ExpensesList extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <section>
        {
          expenses.map((expense) => (
            <Expense
              key={ expense.id }
              tag={ expense.tag }
              method={ expense.method }
              value={ expense.value }
              description={ expense.description }
            />
          ))
        }
      </section>
    );
  }
}

ExpensesList.propTypes = {
  expenses: PropTypes.shape(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesList);
