import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { changeItem, editExpenses } from '../actions';
import SelectTAG from './SelectTAG';
import SelectCurrency from './SelectCurrency';

class EditExpenses extends React.Component {
  constructor() {
    super();
    this.state = ({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.recoverDataFromGlobalState();
  }

  recoverDataFromGlobalState = () => {
    const { idEdit, expenses } = this.props;
    const findExpenses = expenses.find((expense) => expense.id === idEdit);
    const { id, value, description, currency, method, tag, exchangeRates } = findExpenses;
    this.setState({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
  }

  handleSubmit = () => {
    const { idEdit, expenses, editItem, saveEditedExpense } = this.props;
    const newExpenseGlobalState = expenses.map((expense) => {
      if (expense.id === idEdit) return this.state;
      return expense;
    });
    editItem('', false);
    saveEditedExpense(newExpenseGlobalState);
  };

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { id, exchangeRates, value, description, currency, method, tag } = this.state;
    return (
      <form className={ id }>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="number"
            name="value"
            min="0"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <SelectCurrency
          value={ currency }
          id="select-currency-expense"
          handleChange={ this.handleChange }
          obj={ exchangeRates }
        />
        <label htmlFor="payment-method">
          Método de Pagamento:
          <select
            id="payment-method"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de Débito</option>
          </select>
        </label>
        <SelectTAG value={ tag } handleChange={ this.handleChange } />
        <button type="button" onClick={ this.handleSubmit }>Editar despesa</button>
      </form>
    );
  }
}

EditExpenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    find: PropTypes.func,
    map: PropTypes.func,
  })).isRequired,
  idEdit: PropTypes.number.isRequired,
  editItem: PropTypes.func.isRequired,
  saveEditedExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  idEdit: state.wallet.idToEdit,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editItem: (id, edit) => dispatch(editExpenses(id, edit)),
  saveEditedExpense: (values) => dispatch(changeItem(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenses);
