import React from 'react';
import CustomInput from '../components/CustomInput';
import CustomSelect from '../components/CustomSelect';
import Header from './Wallet/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.methodPayment = this.methodPayment.bind(this);

    this.state = {
      value: 0,
      describe: '',
      currency: '',
      categorie: 'Alimentação',
      method: 'Dinheiro',
    };
  }

  methodPayment() {
    return ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  }

  currency() {
    return ['USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP'];
  }

  categorie() {
    return ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  }

  handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;
    console.log(this.state);
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <div>TrybeWallet</div>
        <Header />
        <section>
          <CustomInput
            describe="Valor:"
            onChange={ this.handleChange }
            id="value"
            type="number"
          />
          <CustomInput
            describe="Descrição:"
            onChange={ this.handleChange }
            id="describe"
            type="text"
          />
          <CustomSelect
            id="currency"
            onChange={ this.handleChange }
            options={ this.currency() }
            describe="Moeda"
          />
          <CustomSelect
            id="method"
            onChange={ this.handleChange }
            options={ this.methodPayment() }
            describe="Método de pagamento"
          />
          <CustomSelect
            id="categorie"
            onChange={ this.handleChange }
            options={ this.categorie() }
            describe="Tag"
          />
        </section>
      </main>
    );
  }
}

export default Wallet;
