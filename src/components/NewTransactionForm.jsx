import React, { Component } from 'react';
import styles from '../styles/newtransactionform.module.scss';
import CategorySelect from './CategorySelect';
import CurrencyInput from './CurrencyInput';
import DescriptionInput from './DescriptionInput';
import PaymentMethodInput from './PaymentMethodInput';
import ValueInput from './ValueInput';

class NewTransactionForm extends Component {
  constructor() {
    super();

    this.state = {
      transactionValue: 0,
      currency: '',
      paymentMethod: '',
      category: '',
      description: '',
      apiCurrencies: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const currenciesArr = Object.entries(data);
        currenciesArr.splice(1, 1);
        this.setState({ apiCurrencies: currenciesArr });
      });
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange } = this;
    const {
      transactionValue,
      currency,
      paymentMethod,
      category,
      description,
      apiCurrencies } = this.state;

    return (
      <form className={ styles.newTransactionForm }>
        <ValueInput
          value={ transactionValue }
          handleChange={
            ({ target: { value, name } }) => this.setState({ [name]: Number(value) })
          }
        />
        <CurrencyInput
          value={ currency }
          handleChange={ handleChange }
          currencies={ apiCurrencies }
        />
        <PaymentMethodInput value={ paymentMethod } handleChange={ handleChange } />
        <CategorySelect value={ category } handleChange={ handleChange } />
        <DescriptionInput value={ description } handleChange={ handleChange } />
      </form>
    );
  }
}

export default NewTransactionForm;
