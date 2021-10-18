import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import InputComponent from '../components/InputComponent';
import SelectComponent from '../components/SelectComponent';
import { currenciesAction } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expensesValues: {
        value: '',
        description: '',
        currencies: '',
        payment: '',
        tag: '',
      },
    };
    this.fetchApi = this.fetchApi.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { dispatchToGlobal } = this.props;
    try {
      const urlPatch = 'https://economia.awesomeapi.com.br/json/all';
      const fetchApi = await fetch(urlPatch);
      const returnApi = await fetchApi.json();
      const currencies = Object.keys(returnApi).filter((code) => code !== 'USDT');
      dispatchToGlobal(currencies);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { currenciesInfo } = this.props;
    const { expensesValues: {
      value,
      description,
      currencies,
      payment,
      tag,
    } } = this.state;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <>
        <Header />
        <form>
          <InputComponent value={ value } label="Valor" id="value" />
          <InputComponent value={ description } label="Descrição" id="description" />
          <SelectComponent
            value={ currencies }
            label="Moeda"
            id="moeda"
            options={ currenciesInfo }
          />
          <SelectComponent
            value={ payment }
            label="Método de pagamento"
            id="pagamento"
            options={ paymentMethods }
          />
          <SelectComponent
            value={ tag }
            label="Tag"
            id="tag"
            options={ tags }
          />
        </form>
        <button type="button">Adicionar despesa</button>
      </>
    );
  }
}

Wallet.propTypes = {
  dispatchToGlobal: PropTypes.func.isRequired,
  currenciesInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currenciesInfo: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchToGlobal: (currencies) => dispatch(currenciesAction(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
