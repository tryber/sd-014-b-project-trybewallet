import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { updateExpenses } from '../actions';

class FormEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseUpdate: {},
    };
    this.saveExpenseInState = this.saveExpenseInState.bind(this);
  }

  componentDidMount() {
    this.saveExpenseInState();
  }

  saveExpenseInState() {
    const { expenses, expenseId } = this.props;
    const expense = expenses.find((item) => item.id === expenseId);
    this.setState({ expenseUpdate: expense });
  }

  handleChange({ target }) {
    this.setState((state) => ({
      expenseUpdate: {
        ...state.expenseUpdate,
        [target.name]: target.value,
      },
    }));
  }

  updateExpenses() {
    const { expenses, submitExpenseUpdate } = this.props;
    const { expenseUpdate } = this.state;
    const newExpenses = [...expenses];
    newExpenses.forEach((item, index) => {
      if (item.id === expenseUpdate.id) {
        newExpenses.splice(index, 1, expenseUpdate);
      }
    });
    submitExpenseUpdate(newExpenses);
  }

  renderSelects() {
    const { currencies } = this.props;
    const { expenseUpdate } = this.state;
    return (
      <>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ expenseUpdate.currency || '' }
            onChange={ (e) => this.handleChange(e) }
          >
            {currencies.map((currency, i) => (
              <option key={ i } value={ currency }>{ currency }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            id="method"
            name="method"
            value={ expenseUpdate.method || '' }
            onChange={ (e) => this.handleChange(e) }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            value={ expenseUpdate.tag || '' }
            onChange={ (e) => this.handleChange(e) }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    const { expenseUpdate } = this.state;
    return (
      <form className="form-expense">
        <label htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            value={ expenseUpdate.value || '' }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            value={ expenseUpdate.description || '' }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        { this.renderSelects() }
        <button
          type="button"
          className="edit-expense"
          onClick={ () => this.updateExpenses() }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

FormEdit.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenseId: PropTypes.number.isRequired,
  submitExpenseUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  expenseId: state.wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  submitExpenseUpdate: (expense) => dispatch(updateExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
