import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses, getCurrencies, saveEditExpense } from '../actions';
import { paymentMethod, tag as tagMethod } from '../data/selectOptionData';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import '../css/formCss.css';

class RegularForm extends React.Component {
  constructor({ expenses, id }) {
    super();
    this.state = {
      id: expenses.length === 0 ? 0 : id + (expenses.length - id),
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  componentDidMount() {
    const { getCurrenciesValue } = this.props;
    getCurrenciesValue();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleAddClick() {
    const { saveExpenses, objectCurrencies, getCurrenciesValue } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    getCurrenciesValue();
    saveExpenses({ id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: objectCurrencies,
    });
    this.setState(() => ({
      id: id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="form-container">
        <Input
          name="value"
          value={ value }
          type="text"
          labelTitle="Valor"
          onChange={ this.handleChange }
        />
        <Input
          name="description"
          value={ description }
          type="text"
          labelTitle="Descrição"
          onChange={ this.handleChange }
        />
        <Select
          arrayOption={ currencies }
          labelTitle="Moeda"
          value={ currency }
          name="currency"
          onChange={ this.handleChange }
        />
        <Select
          arrayOption={ paymentMethod }
          labelTitle="Método de pagamento"
          value={ method }
          name="method"
          onChange={ this.handleChange }
        />
        <Select
          arrayOption={ tagMethod }
          labelTitle="Tag"
          value={ tag }
          name="tag"
          onChange={ this.handleChange }
        />
        <Button text="Adicionar despesa" onClick={ this.handleAddClick } />
      </form>
    );
  }
}

const mapStateToProps = ({ wallet, user }) => ({
  currencies: wallet.currencies,
  objectCurrencies: wallet.objectCurrencies,
  email: user.email,
  loading: wallet.isLoading,
  edited: wallet.edited,
  expenses: wallet.expenses,
  id: wallet.id,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrenciesValue: () => dispatch(getCurrencies()),
  saveExpenses: (localStateObj) => dispatch(addExpenses(localStateObj)),
  saveEditedExpenses: (newExpenses) => dispatch(saveEditExpense(newExpenses)),
});

RegularForm.defaultProps = {
  currencies: { },
  id: undefined,
  objectCurrencies: undefined,
};

RegularForm.propTypes = {
  getCurrenciesValue: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number,
  // PropTypes de objectCurrencies desenvolvida com ajuda de Arthur Junior - 13B
  objectCurrencies: PropTypes.objectOf(PropTypes.object),
  saveExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegularForm);
