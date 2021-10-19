import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { saveWallet } from '../actions';
import Header from '../components/Header';
import InputBase from '../components/InputBase';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      coins: [],
      Valor: '',
      Descrição: '',
      Moeda: 'USD',
      Metodo: this.metodoDePagamentoArray()[0],
      tag: this.tagArray()[0],
      id: 0,
    };
  }

  async componentDidMount() {
    this.addCoinsToStateArray();
  }

  getCoinsForApi = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return data;
  }

  addCoinsToStateArray = async () => {
    const coins = await this.getCoinsForApi();
    const data = Object.keys(coins);
    const index = data.indexOf('USDT');
    data.splice(index, 1);
    this.setState({ coins: data });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = async () => {
    const { sendFormValues } = this.props;
    const { id, Valor, Descrição, Moeda, Metodo, tag } = this.state;
    const exchanges = await this.getCoinsForApi();
    const values = {
      id,
      value: Valor,
      description: Descrição,
      currency: Moeda,
      method: Metodo,
      tag,
      exchangeRates: exchanges,
    };
    sendFormValues(values);
    this.setState(
      (prevState) => ({
        id: prevState.id + 1,
        Valor: '',
        Descrição: '',
        Moeda: 'USD',
        Metodo: this.metodoDePagamentoArray()[0],
        tag: this.tagArray()[0],
      }),
    );
  }

  metodoDePagamentoArray = () => ['Dinheiro', 'Cartão de crédito', 'Cartão de débito']

  tagArray = () => ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde']

  render() {
    const { coins, Valor, Descrição, Moeda, Metodo, tag } = this.state;
    return (
      <main>
        <Header />
        <form>
          <InputBase
            name="Valor"
            type="number"
            changeValue={ this.handleChange }
            value={ Valor }
          />
          <InputBase
            name="Descrição"
            type="text"
            value={ Descrição }
            changeValue={ this.handleChange }
          />
          <Select
            NewId="moeda"
            name="Moeda"
            handleValue={ this.handleChange }
            value={ Moeda }
            optArray={ coins }
            label="Moeda"
          />
          <Select
            NewId="metodo-de-pagamento"
            name="Metodo"
            handleValue={ this.handleChange }
            value={ Metodo }
            optArray={ this.metodoDePagamentoArray() }
            label="Método de pagamento"
          />
          <Select
            NewId="tag"
            name="tag"
            value={ tag }
            handleValue={ this.handleChange }
            optArray={ this.tagArray() }
            label="Tag"
          />
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </main>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendFormValues: (formValues) => dispatch(saveWallet(formValues)),
});

Wallet.propTypes = {
  sendFormValues: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
