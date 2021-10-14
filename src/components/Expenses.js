// Requisito 6
import React, { Component } from 'react';
// Requisito 7
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../actions';

class Expenses extends Component {
  constructor() {
    super();
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderSelectCurrency = this.renderSelectCurrency.bind(this);
    this.renderSelectPayMethod = this.renderSelectPayMethod.bind(this);
    this.renderTag = this.renderTag.bind(this);
  }

  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  renderValue() {
    return (
      <label htmlFor="value">
        Valor
        <input type="number" id="value" />
      </label>
    );
  }

  renderDescription() {
    return (
      <label htmlFor="input-description">
        Descrição
        <input type="text" id="input-description" />
      </label>
    );
  }

  renderSelectCurrency() {
    const { getDataCurrencies } = this.props;
    return (
      <label htmlFor="input-select-currency">
        Moeda
        <select id="input-select-currency">
          { Object.keys(getDataCurrencies).map((currencies, index) => (
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

  renderSelectPayMethod() {
    return (
      <label htmlFor="input-select-pay">
        Método de pagamento
        <select id="input-select-pay">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    return (
      <label htmlFor="tag-category">
        Tag
        <select id="tag-category">
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
        { this.renderSelectCurrency() }
        { this.renderSelectPayMethod() }
        { this.renderTag() }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getData: (state) => dispatch(fetchApi(state)),
});

const mapStateToProps = (state) => ({
  getDataCurrencies: state.wallet.currencies,
});

Expenses.propTypes = {
  getData: PropTypes.func.isRequired,
  getDataCurrencies: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
