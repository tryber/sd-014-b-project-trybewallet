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
    const { saveExpenses, currencies, getCurrenciesValue } = this.props;
    const { id, value, description, currency, method, tag } = this.state;
    getCurrenciesValue();
    saveExpenses({ id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: currencies,
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
    const arrayOfCodeIn = Object.keys(currencies);
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
          arrayOption={ arrayOfCodeIn }
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
  currencies: wallet.currencies[0],
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
};

RegularForm.propTypes = {
  getCurrenciesValue: PropTypes.func.isRequired,
  // PropTypes de currencies desenvolvida com ajuda de Arthur Junior - 13B
  currencies: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  saveExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegularForm);
