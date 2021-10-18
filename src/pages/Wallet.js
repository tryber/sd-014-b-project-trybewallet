import React from 'react';
import CustomInput from '../components/CustomInput';
import CustomSelect from '../components/CustomSelect';
import Header from './Wallet/Header';

const URL_API = 'https://economia.awesomeapi.com.br/json/all';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.methodPayment = this.methodPayment.bind(this);
    this.returnApi = this.returnApi.bind(this);

    this.state = {
      value: 0,
      describe: '',
      categorie: 'Alimentação',
      method: 'Dinheiro',
      currencies: [],
    };
  }

  componentDidMount() {
    this.returnApi();
  }

  async returnApi() {
    const fetchApi = await fetch(URL_API);
    const jsonApi = await fetchApi.json();
    const currency = Object.keys(jsonApi);
    currency.splice(1, 1);
    this.setState({
      currencies: currency,
    });
  }

  methodPayment() {
    return ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  }

  categorie() {
    return ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  }

  handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.state;
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
            id="method"
            onChange={ this.handleChange }
            options={ this.methodPayment() }
            describe="Método de pagamento"
          />
          <CustomSelect
            id="currency"
            onChange={ this.handleChange }
            options={ currencies || 'Error!' }
            describe="Moeda"
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
