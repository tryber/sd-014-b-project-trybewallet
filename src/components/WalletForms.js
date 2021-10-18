import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencyAPI } from '../actions/index';

class WalletForms extends React.Component {
  constructor() {
    super();
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderPayment = this.renderPayment.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  componentDidMount() {
    const { getWalletData } = this.props;
    getWalletData();
  }

  renderValue() {
    return (
      <label htmlFor="Expenses">
        Valor
        <input
          type="number"
          name="Expenses"
          id="Expenses"
          placeholder="Expenses"
        />
      </label>

    );
  }

  renderDescription() {
    return (
      <label htmlFor="Description">
        Descrição
        <input
          type="text"
          name="Description"
          id="Description"
          placeholder="Description"
        />
      </label>
    );
  }

  renderCurrency() {
    const { getDataCurrencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select name="currency" id="currency">
          { getDataCurrencies.map((currencies, index) => (
            <option
              key={ index }
              value={ currencies }
            >
              { currencies }
            </option>
          )) }
        </select>
      </label>
    );
  }

  renderPayment() {
    return (
      <label htmlFor="Payment">
        Método de Pagamento
        <select
          type="number"
          name="Payment"
          id="Payment"
          placeholder="Payment"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Cartão de Débito">Cartão de Débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="Tag">
        Tag
        <select
          type="number"
          name="Tag"
          id="Tag"
          placeholder="Tag"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        { this.renderValue() }
        { this.renderDescription() }
        { this.renderCurrency() }
        { this.renderPayment() }
        { this.renderTag() }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getWalletData: (state) => dispatch(fetchCurrencyAPI(state)),
});

const mapStateToProps = (state) => ({
  getDataCurrencies: state.wallet.currencies,
});

WalletForms.propTypes = {
  getWalletData: PropTypes.func.isRequired,
  getDataCurrencies: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForms);
