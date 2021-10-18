import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputLabel from './InputLabel';
import SelectLabel from './SelectLabel';
import DATA from '../data';
import { END_EDIT_EXPENSE, sortExpenses } from '../actions';

class ExpenseEditorForm extends Component {
  constructor(props) {
    super(props);
    const { editExpense:
      { id, value, description, currency, method, tag, exchangeRates } } = props;
    this.state = { id, value, description, currency, method, tag, exchangeRates };
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleClick = () => {
    const { state: { id, value }, props: { expenses, submitEdition } } = this;
    if (value === '') return;
    const newExpense = expenses;
    newExpense.splice(id, 1, this.state);
    submitEdition(sortExpenses(newExpense));
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="wallet-form">
        <InputLabel
          id="value"
          value={ value }
          name="Valor"
          callbackFunc={ this.handleChange }
        />
        <SelectLabel
          id="currency"
          value={ currency }
          name="Moeda"
          callbackFunc={ this.handleChange }
          ITEMS={ currencies }
        />
        <SelectLabel
          id="method"
          value={ method }
          name="Método de pagamento"
          callbackFunc={ this.handleChange }
          ITEMS={ DATA.payment }
        />
        <SelectLabel
          id="tag"
          value={ tag }
          name="Tag"
          callbackFunc={ this.handleChange }
          ITEMS={ DATA.tag }
        />
        <InputLabel
          id="description"
          value={ description }
          name="Descrição"
          callbackFunc={ this.handleChange }
        />
        <button type="button" onClick={ this.handleClick }>
          Editar despesa
        </button>
      </form>
    );
  }
}

ExpenseEditorForm.propTypes = PropTypes.shape({
  editExpense: PropTypes.objectOf(PropTypes.any),
  expenses: PropTypes.arrayOf(PropTypes.object),
  submitEdition: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
}).isRequired;

const mapState = ({ wallet: { currencies, expenses, editExpense } }) => ({
  currencies, expenses, editExpense,
});

const mapDispatch = (dispatch) => ({
  submitEdition: (value) => dispatch(END_EDIT_EXPENSE(value)),
});

export default connect(mapState, mapDispatch)(ExpenseEditorForm);
