import React, { Component } from 'react';
import Tag from './Tag';
import Currency from './Currency';
import Description from './Description';
import PaymentOption from './PaymentOption';
import Value from './Value';

class Form extends Component {
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
      <form>
        <Value
          value={ transactionValue }
          handleChange={
            ({ target: { value, name } }) => this.setState({ [name]: Number(value) })
          }
        />
        <Currency
          value={ currency }
          handleChange={ handleChange }
          currencies={ apiCurrencies }
        />
        <PaymentOption value={ paymentMethod } handleChange={ handleChange } />
        <Tag value={ category } handleChange={ handleChange } />
        <Description value={ description } handleChange={ handleChange } />
      </form>
    );
  }
}

export default Form;
