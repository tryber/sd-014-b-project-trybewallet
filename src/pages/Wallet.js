import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitExpenses } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Options from '../components/Option';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount = () => {
    this.requestMoedas();
  }

  requestMoedas = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const dataCoins = await response.json();
    delete dataCoins.USDT;
    const arrayFinal = Object.keys(dataCoins);
    // arrayFinal.splice(1, 1);
    this.setState({
      coins: arrayFinal,
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  submit = async () => {
    const { expensesF } = this.props;
    const { value, description, currency, method, tag } = this.state;

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const dataCoins = await response.json();

    expensesF({ value, description, currency, method, tag, exchangeRates: dataCoins });

    // this.setState({
    //   value: '',
    //   description: '',
    //   currency: 'USD',
    //   method: 'Dinheiro',
    //   tag: 'Alimentação',
    //   exchangeRates: [],
    // });
  }

  render() {
    const { coins, value } = this.state;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="Valor">
            Valor
            <input
              type="text"
              value={ value }
              onChange={ this.handleChange }
              name="value"
              id="Valor"
            />
          </label>
          <Input onChange={ this.handleChange } />
          <label htmlFor="Coins">
            Moeda
            <select onChange={ this.handleChange } name="currency" id="Coins">
              { coins.map((element, index) => (<Select
                key={ index }
                Coin={ element }
              />))}
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select onChange={ this.handleChange } name="method" id="payment">
              <option type="combobox">Dinheiro</option>
              <option type="combobox">Cartão de crédito</option>
              <option type="combobox">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tags">
            Tag
            <select onChange={ this.handleChange } name="tag" id="tags">
              <Options />
            </select>
          </label>
        </form>
        <button onClick={ this.submit } type="button">Adicionar despesa</button>
      </div>
    );
  }
}

const mapDispatchToProps = () => (dispatch) => ({
  expensesF: (state) => dispatch(submitExpenses(state)),
});
Wallet.propTypes = {
  expensesF: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Wallet);
