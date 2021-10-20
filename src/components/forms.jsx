import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { statusCurrency } from '../actions';
import returnApi from '../services/apiRequest';

class Forms extends React.Component {
  constructor() {
    super();

    this.getApiFromServices = this.getApiFromServices.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.labelsValueDescribe = this.labelsValueDescribe.bind(this);

    this.state = {
      resultsApi: [],
      arrayCoins: [],
      despesas: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
      payment: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      value: '',
      describe: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
    };
  }

  componentDidMount() {
    this.getApiFromServices();
  }

  async getApiFromServices() {
    const results = await returnApi();
    this.setState({
      resultsApi: [results],
    });
    this.getCurrencies();
  }

  getCurrencies() {
    const { resultsApi } = this.state;
    resultsApi.map((element) => (
      this.setState({
        arrayCoins: (Object.keys(element)),
      })
    ));
  }

  handleChange(event) {
    const { value, describe, currency, paymentMethod, tag } = this.state;
    if (event.target.id === 'valor') {
      this.setState({
        value: event.target.value,
      });
    } else if (event.target.id === 'descricao') {
      this.setState({
        describe: event.target.value,
      });
    } else if (event.target.id === 'Moeda') {
      this.setState({
        currency: event.target.value,
      });
    } else if (event.target.id === 'payment') {
      this.setState({
        paymentMethod: event.target.value,
      });
    } else if (event.target.id === 'despesa') {
      this.setState({
        tag: event.target.value,
      });
    }
    return { value, describe, currency, paymentMethod, tag };
  }

  labelsValueDescribe() {
    return (
      <>
        <label htmlFor="valor">
          Valor:
          <input id="valor" onChange={ this.handleChange } type="number" name="name" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input id="descricao" onChange={ this.handleChange } type="text" name="name" />
        </label>
      </>
    );
  }

  async handleClickButton() {
    const { value, describe, currency, paymentMethod, tag, id } = this.state;
    const { sendGlobalState } = this.props;
    const apiReturn = await returnApi();
    this.setState({
      id: id + 1,
    });
    sendGlobalState(
      {
        id,
        value,
        description: describe,
        currency,
        method: paymentMethod,
        tag,
        exchangeRates: {
          ...apiReturn,
        },
      },
    );
  }

  render() {
    const { arrayCoins, despesas, payment } = this.state;
    return (
      <form>
        { this.labelsValueDescribe() }
        <label htmlFor="Moeda">
          Moeda:
          <select id="Moeda" onChange={ this.handleChange }>
            { arrayCoins.map((currencie) => {
              if (currencie !== 'USDT') {
                return (
                  <option key={ currencie } value={ currencie }>
                    { currencie }
                  </option>
                );
              }
              return '';
            }) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento:
          <select id="payment" onChange={ this.handleChange }>
            { payment.map((payments) => (
              <option key={ payments }>{ payments }</option>)) }
          </select>
        </label>
        <label htmlFor="despesa">
          Tag:
          <select id="despesa" onChange={ this.handleChange }>
            { despesas.map((despesa) => (
              <option key={ despesa }>{ despesa }</option>)) }
          </select>
        </label>
        <button
          onClick={ this.handleClickButton }
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Forms.propTypes = {
  sendGlobalState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendGlobalState: (obj) => dispatch(statusCurrency(obj)),
});

export default connect(null, mapDispatchToProps)(Forms);
