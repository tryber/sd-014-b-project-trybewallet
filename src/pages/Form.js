import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToExpenses, fetchCurrencies } from '../actions';

const paymentMethodOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

const categoryOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends React.Component {
  constructor(props) {
    super(props);

    const { currencies } = props;

    this.state = {
      value: 2,
      description: 'bundinha',
      currency: 'USD',
      method: 'money',
      tag: 'meals',
      id: 0,
      exchangeRates: currencies,
    };

    this.changeStateAndElementValue = this.changeStateAndElementValue.bind(this);
    this.createSelectElement = this.createSelectElement.bind(this);
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

  createSelectElement(id, label, source) {
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
    const {
      createSelectElement, changeStateAndElementValue, stateToExpenses,
      state,
      props: { currencies },
    } = this;

    const idsArray = Object.keys(state);
    const valuesArray = Object.values(state);

    const filteredCurrencies = Object
      .keys(currencies)
      .filter((currency) => currency !== 'USDT');

    const currencyOptions = filteredCurrencies
      .map((filteredCurrency) => (filteredCurrency));

    return (
      <form>
        <label htmlFor={ idsArray[0] }>
          Valor
          <input
            type="number"
            id={ idsArray[0] }
            value={ valuesArray[0] }
            onChange={ (event) => changeStateAndElementValue(event, idsArray[0]) }
          />
        </label>
        <label htmlFor={ idsArray[1] }>
          Descrição
          <textarea
            id={ idsArray[1] }
            value={ valuesArray[1] }
            onChange={ (event) => changeStateAndElementValue(event, idsArray[1]) }
          />
        </label>
        { createSelectElement(idsArray[2], 'Moeda', currencyOptions) }
        { createSelectElement(idsArray[3], 'Método de pagamento', paymentMethodOptions) }
        { createSelectElement(idsArray[4], 'Tag', categoryOptions) }
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

const mapDispatchToProps = (dispatch) => ({
  callFetchCurrencies: () => dispatch(fetchCurrencies()),
  dispatchToExpenses: (formState) => dispatch(addToExpenses(formState)),
});

Form.propTypes = {
  callFetchCurrencies: PropTypes.func,
  id: PropTypes.number,
  currencies: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
