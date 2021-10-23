import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

const paymentMethodOptions = [
  { money: 'Dinheiro' },
  { credit: 'Cartão de crédito' },
  { debit: 'Cartão de débito' },
];

const categoryOptions = [
  { meals: 'Alimentação' },
  { leisure: 'Lazer' },
  { work: 'Trabalho' },
  { transportation: 'Transporte' },
  { health: 'Saúde' },
];

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenditure: 0,
      description: '',
      currency: 'BRL',
      method: 'money',
      category: 'meals',
    };

    this.changeStateAndElementValue = this.changeStateAndElementValue.bind(this);
    this.createSelectElement = this.createSelectElement.bind(this);
  }

  componentDidMount() {
    const { callFetchCurrencies } = this.props;
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
              key={ Object.keys(option)[0] }
              value={ Object.keys(option)[0] }
            >
              { Object.values(option)[0] }
            </option>))}
        </select>
      </label>
    );
  }

  render() {
    const {
      createSelectElement, changeStateAndElementValue,
      state,
      props: { currencies },
    } = this;

    const idsArray = Object.keys(state);
    const valuesArray = Object.values(state);
    const filteredCurrencies = Object
      .keys(currencies)
      .filter((currency) => currency !== 'USDT');

    const currencyOptions = filteredCurrencies.map((filteredCurrency) => (
      { [filteredCurrency]: filteredCurrency }
    ));

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
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  callFetchCurrencies: () => dispatch(fetchCurrencies()),
});

Form.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
