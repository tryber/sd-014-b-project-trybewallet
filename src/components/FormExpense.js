import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getCoins from '../services/coinsAPI';
import Input from './Input';
import Select from './Select';
import SelectPayment from './SelectPayment';
import { getCoinsCurrent } from '../actions';

class FormExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.requestCoins = this.requestCoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.requestCoinsButton = this.requestCoinsButton.bind(this);
  }

  componentDidMount() {
    this.requestCoins();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async requestCoinsButton() {
    const currentCoins = await getCoins().then((response) => response);
    delete currentCoins.USDT;
    this.setState(() => ({
      exchangeRates: currentCoins,
    }));

    this.submitForm();
  }

  submitForm() {
    const { dispatchFormExpenses } = this.props;
    const { value, description, currency, method, tag, exchangeRates } = this.state;
    const dateForm = {
      id: 0,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    dispatchFormExpenses(dateForm);
  }

  async requestCoins() {
    const currentCoins = await getCoins().then((response) => response);
    const coinsArrayCurrency = Object.values(currentCoins);
    console.log(coinsArrayCurrency);
    coinsArrayCurrency.splice(1, 1);
    this.setState({
      coins: coinsArrayCurrency,
    });
  }

  render() {
    const { coins, value, description, currency, method, tag } = this.state;
    const methodPayment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const expense = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <section>
        <form>
          <Input
            name="value"
            description="Valor: "
            handleChange={ this.handleChange }
            value={ value }
          />
          <Input
            description="Descrição: "
            name="description"
            handleChange={ this.handleChange }
            value={ description }
          />
          <Select
            name="currency"
            description="Moeda: "
            handleChange={ this.handleChange }
            value={ currency }
            arrayMap={ coins }
          />
          <SelectPayment
            name="method"
            description="Método de pagamento: "
            handleChange={ this.handleChange }
            arrayMap={ methodPayment }
            value={ method }
          />
          <SelectPayment
            name="tag"
            description="Tag: "
            handleChange={ this.handleChange }
            arrayMap={ expense }
            value={ tag }
          />
        </form>
        <button
          type="button"
          onClick={ this.requestCoinsButton }
        >
          Adicionar despesa
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFormExpenses: (payload) => dispatch(getCoinsCurrent(payload)),
});

FormExpense.propTypes = {
  dispatchFormExpenses: PropTypes.func.isRequired,
}.isRequired;

export default connect(null, mapDispatchToProps)(FormExpense);
