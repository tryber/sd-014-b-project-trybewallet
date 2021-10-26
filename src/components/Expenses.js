import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAPI from '../services';
import Currencies from './Currencies';
import Input from './Input';
import Select from './Select';
import { methods, tags } from './SelectHelper';
import AddExpenseBtn from './AddExpenseBtn';
import { getDataFromAPI, addExpense } from '../actions';

class Expenses extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatchAPI } = this.props;
    dispatchAPI();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async handleClick() {
    const { id, value, description, currency, method, tag } = this.state;
    const { submitState } = this.props;

    const requestAPI = await fetchAPI();
    const exchangeRates = await requestAPI;

    this.setState((prevState) => ({ id: prevState.id + 1 }));

    submitState({ value, description, id, currency, method, tag, exchangeRates });
    this.setState({
      value: '',
      description: '',
      currency: ' ',
      method: '',
      tag: '',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { handleChange, handleClick } = this;
    const { currencies } = this.props;
    const displayCurrencies = currencies.filter((item) => item !== 'USDT');

    return (
      <form>
        <Input
          label="Valor:"
          type="text"
          id="input-value"
          name="value"
          value={ value }
          onChange={ handleChange }
        />
        <Input
          label="Descrição:"
          type="text"
          id="input-description"
          name="description"
          value={ description }
          onChange={ handleChange }
        />
        <Currencies
          label="Moeda:"
          id="input-currency"
          value={ currency }
          options={ displayCurrencies }
          handleChange={ handleChange }
        />
        <Select
          label="Método de pagamento"
          name="method"
          value={ method }
          handleChange={ handleChange }
          options={ methods }
        />
        <Select
          label="Tag"
          name="tag"
          value={ tag }
          handleChange={ handleChange }
          options={ tags }
        />
        <AddExpenseBtn click={ handleClick } />
      </form>
    );
  }
}

Expenses.propTypes = {
  currencies: PropTypes.shape({
    filter: PropTypes.func,
  }).isRequired,
  dispatchAPI: PropTypes.func.isRequired,
  submitState: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAPI: () => dispatch(getDataFromAPI()),
  submitState: (expenses) => dispatch(addExpense(expenses)),
}
);

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
