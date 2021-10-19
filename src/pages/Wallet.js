import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CustomInput from '../components/CustomInput';
import CustomSelect from '../components/CustomSelect';
import Header from './Wallet/Header';
import { expensesToGlobalState } from '../actions/index';
import List from '../components/List';

const URL_API = 'https://economia.awesomeapi.com.br/json/all';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.methodPayment = this.methodPayment.bind(this);
    this.returnApi = this.returnApi.bind(this);
    this.filterCurrency = this.filterCurrency.bind(this);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };
  }

  componentDidMount() {
    this.returnApi();
  }

  async returnApi() {
    const fetchApi = await fetch(URL_API);
    const jsonApi = await fetchApi.json();
    this.setState({
      exchangeRates: jsonApi,
    });
  }

  filterCurrency() {
    const { exchangeRates } = this.state;
    const currency = Object.keys(exchangeRates);
    return currency.filter((element) => element !== 'USDT');
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

  handleClick() {
    this.returnApi();
    const { id } = this.state;
    const { setExpensies } = this.props;
    setExpensies(this.state);
    this.setState({
      id: id + 1,
    });
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <CustomInput
            description="Valor:"
            onChange={ this.handleChange }
            id="value"
            type="number"
          />
          <CustomInput
            description="Descrição:"
            onChange={ this.handleChange }
            id="description"
            type="text"
          />
          <CustomSelect
            id="method"
            onChange={ this.handleChange }
            options={ this.methodPayment() }
            description="Método de pagamento"
          />
          <CustomSelect
            id="currency"
            onChange={ this.handleChange }
            options={ this.filterCurrency() || ['Error!'] }
            description="Moeda"
          />
          <CustomSelect
            id="tag"
            onChange={ this.handleChange }
            options={ this.categorie() }
            description="Tag"
          />
          <button
            onClick={ () => this.handleClick() }
            type="button"
          >
            Adicionar despesa
          </button>
        </section>
        <div>
          VALOR | DESCRIÇÃO | MÉTODO | MOEDA | CATEGORIA
          <List />
        </div>
      </main>
    );
  }
}

Wallet.propTypes = {
  setExpensies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setExpensies: (state) => dispatch(expensesToGlobalState(state)),
});

export default connect(null, mapDispatchToProps)(Wallet);
