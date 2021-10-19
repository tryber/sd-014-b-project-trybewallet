import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEditExpense } from '../actions';
import { paymentMethod, tag as tagMethod } from '../data/selectOptionData';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import '../css/formCss.css';

class EditedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveEditClick = this.handleSaveEditClick.bind(this);
  }

  componentDidMount() {
    this.handleEditedExpense();
  }

  handleSaveEditClick(id) {
    const { expenses, saveEditedExpenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const expenseIndex = expenses.find((expense) => expense.id === id);
    const newExpenses = [...expenses];
    newExpenses[expenseIndex] = {
      ...newExpenses[expenseIndex],
      value,
      description,
      currency,
      method,
      tag,
    };
    console.log(newExpenses)
    saveEditedExpenses(newExpenses);
  }

  handleEditedExpense() {
    const { expenses, id } = this.props;
    const formEdited = expenses.find((expense) => expense.id === id);
    this.setState({
      value: formEdited.value,
      description: formEdited.description,
      currency: formEdited.currency,
      method: formEdited.method,
      tag: formEdited.tag,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    console.log(this.state)
  }

  render() {
    const { codeCurrencies, id } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="form-container">
        <Input
          name="value"
          value={ value }
          type="text"
          labelTitle="Valor"
          onChange={ this.handleChange }
          dataTestId="value-input"
        />
        <Input
          name="description"
          value={ description }
          type="text"
          labelTitle="Descrição"
          onChange={ this.handleChange }
          dataTestId="description-input"
        />
        <Select
          arrayOption={ codeCurrencies }
          labelTitle="Moeda"
          value={ currency }
          name="currency"
          onChange={ this.handleChange }
          dataTestId="currency-input"
          id="currency"
        />
        <Select
          arrayOption={ paymentMethod }
          labelTitle="Método de pagamento"
          value={ method }
          name="method"
          onChange={ this.handleChange }
          dataTestId="method-input"
        />
        <Select
          arrayOption={ tagMethod }
          labelTitle="Tag"
          value={ tag }
          name="tag"
          onChange={ this.handleChange }
          dataTestId="tag-input"
        />
        <Button text="Editar despesa" onClick={ () => this.handleSaveEditClick(id) } />
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
  id: wallet.id,
  codeCurrencies: wallet.codeCurrencies,
  currencies: wallet.currencies[0],
  excludeExpense: wallet.exclude,
});

const mapDispatchToProps = (dispatch) => ({
  saveEditedExpenses: (newExpenses) => dispatch(saveEditExpense(newExpenses)),
});

EditedForm.defaultProps = {
  codeCurrencies: [],
};

EditedForm.propTypes = {
  // PropTypes de currencies desenvolvida com ajuda de Arthur Junior - 13B
  // currencies: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  codeCurrencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveEditedExpenses: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditedForm);
