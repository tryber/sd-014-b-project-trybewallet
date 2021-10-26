import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadExpense, fetchCurrencies } from '../actions';
// Formulario baseado em https://pt-br.reactjs.org/docs/forms.html
// Formato de String
const paymentMethodOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const categoryOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends React.Component {
  constructor(props) {
    super(props);

    const { currencies } = props;

    this.state = {
      value: 2,
      description: 'OMG',
      currency: 'USD',
      method: 'money',
      tag: 'meals',
      exchangeRates: currencies,
    };

    this.changeStateAndElementValue = this.changeStateAndElementValue.bind(this);
    this.createOptions = this.createOptions.bind(this);
    this.stateToExpenses = this.stateToExpenses.bind(this);
  }

  componentDidMount() {
    const {
      props: { callFetchCurrencies },
    } = this;
    callFetchCurrencies();
  }

  changeStateAndElementValue({ target: { value } }, key) {
    this.setState({ [key]: value });
  }

  createOptions(id, label, source) {
    const { state, changeStateAndElementValue } = this;
    return (
      <label htmlFor={ id }>
        { label }
        <select
          id={ id }
          value={ state[id] }
          onChange={ (event) => changeStateAndElementValue(event, id) }
        >
          { source.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>))}
        </select>
      </label>
    );
  }

  async stateToExpenses() {
    const {
      props: { id, dispatchToExpenses, callFetchCurrencies },
    } = this;

    await callFetchCurrencies();
    const { currencies } = this.props;
    this.setState({ id: id(), exchangeRates: currencies }, () => {
      dispatchToExpenses(this.state);
    });
  }

  render() {
    const { createOptions, changeStateAndElementValue, state, stateToExpenses,
      props: { currencies } } = this;
    const arrayKey = Object.keys(state);
    const arrayValue = Object.values(state);
    const currenciesAPI = Object
      .keys(currencies)
      .filter((currency) => currency !== 'USDT');

    const currencyOptions = currenciesAPI
      .map((filteredCurrency) => (filteredCurrency));

    return (
      <form>
        <label htmlFor={ arrayKey[0] }>
          Valor
          <input
            type="number"
            id={ arrayKey[0] }
            value={ arrayValue[0] }
            onChange={ (event) => changeStateAndElementValue(event, arrayKey[0]) }
          />
        </label>
        <label htmlFor={ arrayKey[1] }>
          Descrição
          <textarea
            id={ arrayKey[1] }
            value={ arrayValue[1] }
            onChange={ (event) => changeStateAndElementValue(event, arrayKey[1]) }
          />
        </label>
        { createOptions(arrayKey[2], 'Moeda', currencyOptions) }
        { createOptions(arrayKey[3], 'Método de pagamento', paymentMethodOptions) }
        { createOptions(arrayKey[4], 'Tag', categoryOptions) }
        <button type="button" onClick={ stateToExpenses }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  id: () => {
    let output = 0;
    if (wallet.expenses.length > 0) {
      output = wallet.expenses.length;
    }
    return output;
  },
});

function mapDispatchToProps(dispatch) {
  return ({
    callFetchCurrencies: () => dispatch(fetchCurrencies()),
    dispatchToExpenses: (formState) => dispatch(loadExpense(formState)),
  });
}

Form.propTypes = {
  callFetchCurrencies: PropTypes.func,
  id: PropTypes.number,
  currencies: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
