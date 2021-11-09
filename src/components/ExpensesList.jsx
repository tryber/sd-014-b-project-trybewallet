import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { editAction, editObjAction,
  newExpenseAction, newTotalValueAction } from '../actions';

class ExpensesList extends React.Component {
  constructor() {
    super();

    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.returnDeletedValue = this.returnDeletedValue.bind(this);
    this.returnTotalvalue = this.returnTotalvalue.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  returnDeletedValue({ exchangeRates, currency, value }) {
    const currencyObject = Object.values(exchangeRates).find(({ code }) => (
      code === currency));
    const deletedExchange = Number(currencyObject.ask) * Number(value);
    return deletedExchange;
  }

  returnTotalvalue(expensesList) {
    const totalValue = expensesList.reduce((acc, cur) => {
      let temp = acc;
      const objCurrency = Object.values(cur.exchangeRates).find(({ code }) => (
        code === cur.currency));
      temp += Number(objCurrency.ask) * Number(cur.value);
      return temp;
    }, 0);
    return totalValue;
  }

  handleClickDelete({ target }) {
    const { expensesList, newExpenseAct, newTotalValue } = this.props;
    const { className } = target;

    const deletedObject = expensesList.find((obj) => obj.id === Number(className));
    const deletedValue = this.returnDeletedValue(deletedObject);
    const totalValue = this.returnTotalvalue(expensesList);
    const newTotal = totalValue - deletedValue;

    newTotalValue(newTotal);

    const newArray = expensesList.reduce((acc, cur) => {
      let temp = acc;
      if (cur.id !== Number(className)) {
        temp = [...acc, cur];
      }
      return temp;
    }, []);

    newExpenseAct(newArray);
  }

  handleEdit(expense) {
    const { editThis, saveObj } = this.props;
    editThis(expense);
    saveObj(expense);
  }

  render() {
    const { expensesList } = this.props;
    return (
      <div>
        <table border="1">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            { expensesList.map((objExpense, index) => (
              <TableBody
                key={ index }
                expense={ objExpense }
                handleDelete={ this.handleClickDelete }
                handleEdit={ this.handleEdit }
              />)) }
          </tbody>
        </table>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
  total: state.wallet.totalValue,
});

const mapDispatchToProps = (dispatch) => ({
  newExpenseAct: (newExpense) => dispatch(newExpenseAction(newExpense)),
  newTotalValue: (newValue) => dispatch(newTotalValueAction(newValue)),
  editThis: (edit) => dispatch(editAction(edit)),
  saveObj: (obj) => dispatch(editObjAction(obj)),
});

ExpensesList.propTypes = {
  expensesList: PropTypes.arrayOf(PropTypes.any).isRequired,
  newTotalValue: PropTypes.func.isRequired,
  newExpenseAct: PropTypes.func.isRequired,
  editThis: PropTypes.func.isRequired,
  saveObj: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
