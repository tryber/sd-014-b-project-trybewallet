import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editAction, addCurrency,
  fetchAwesomeApi, newExpenseAction, newTotalValueAction, makeTeste } from '../actions';
import getCoins from '../sevicesAPI/moedasAPI';
import InputForm from './InputForm';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Transporte',
      editBtn: false,
      id: '',
    };

    this.requestCoinsAndPutInTheState = this.requestCoinsAndPutInTheState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.editExpenseItem = this.editExpenseItem.bind(this);
    this.handleSendEdit = this.handleSendEdit.bind(this);
  }

  componentDidMount() {
    this.requestCoinsAndPutInTheState();
  }

  componentDidUpdate() {
    this.editExpenseItem();
  }

  async requestCoinsAndPutInTheState() {
    const { addArrayOfCurrencys } = this.props;
    const typeOfCoins = await getCoins();
    const changeForArray = Object.keys(typeOfCoins);
    changeForArray.splice(1, 1);
    addArrayOfCurrencys(changeForArray);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
  }

  handleClick(callback1) {
    const { value, description, currency, method, tag } = this.state;
    const objExpense = {
      value,
      description,
      currency,
      method,
      tag,
    };
    callback1(objExpense);
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Transporte',
      editBtn: false,
      id: '',
    });
  }

  editExpenseItem() {
    const { editExpenses, editthis } = this.props;
    if (!editExpenses === false) {
      this.setState({
        editBtn: true,
        value: editExpenses.value,
        description: editExpenses.description,
        currency: editExpenses.currency,
        method: editExpenses.method,
        tag: editExpenses.tag,
        id: editExpenses.id,
      }, () => editthis(false));
    }
  }

  handleSendEdit() {
    const { expensesList, newExpenseList, actionTeste, objEdit } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    const editExpenseObj = {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: objEdit.exchangeRates,
    }; // tenho que buscar o exchangeRates antes de fazer o splice
    const newExpensesList = [...expensesList];
    newExpensesList.splice(Number(id), 1, editExpenseObj);
    newExpenseList([], true);
    newExpensesList.forEach((obj) => {
      actionTeste(obj);
    });
    this.setState({
      value: '',
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Transporte',
      editBtn: false,
      id: '',
    });
  }

  render() {
    const { createObjectOfExpenses, arrayCurrencys } = this.props;
    const { value, description, editBtn } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            onChange={ this.handleChange }
            value={ value }
            type="text"
            id="value"
          />
        </label>
        <label htmlFor="description">
          descrição
          <textarea
            onChange={ this.handleChange }
            value={ description }
            type="text"
            id="description"
          />
        </label>
        <InputForm
          createObjectOfExpenses={ createObjectOfExpenses }
          editBtn={ editBtn }
          typeOfCoins={ arrayCurrencys }
          handlechange={ this.handleChange }
          handleclick={ this.handleClick }
          handleSendEdit={ this.handleSendEdit }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet.expenses,
  editExpenses: state.edit.edit,
  arrayCurrencys: state.wallet.currencies,
  objEdit: state.edit.obj,
});

const mapDispatchToProps = (dispatch) => ({
  createObjectOfExpenses: (expense) => dispatch(fetchAwesomeApi(expense)),
  editthis: (edit) => dispatch(editAction(edit)),
  newExpenseList: (newExpense, bool) => dispatch(newExpenseAction(newExpense, bool)),
  newTotalValue: (newValue) => dispatch(newTotalValueAction(newValue)),
  addArrayOfCurrencys: (currencys) => dispatch(addCurrency(currencys)),
  actionTeste: (expense) => dispatch(makeTeste(expense)),
});

Form.propTypes = {
  createObjectOfExpenses: PropTypes.func.isRequired,
  editExpenses: PropTypes.bool,
  editthis: PropTypes.func.isRequired,
  newExpenseList: PropTypes.func.isRequired,
  addArrayOfCurrencys: PropTypes.func.isRequired,
  expensesList: PropTypes.arrayOf(PropTypes.any).isRequired,
  arrayCurrencys: PropTypes.arrayOf(PropTypes.any).isRequired,
  actionTeste: PropTypes.func.isRequired,
  objEdit: PropTypes.objectOf(PropTypes.any).isRequired,
};

Form.defaultProps = {
  editExpenses: PropTypes.objectOf(PropTypes.any),
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
