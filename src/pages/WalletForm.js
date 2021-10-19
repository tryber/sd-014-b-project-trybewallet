import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.formAddValor = this.formAddValor.bind(this);
    this.formAddDescricao = this.formAddDescricao.bind(this);
    this.formAddMoeda = this.formAddMoeda.bind(this);
    this.formAddMetodoPagamento = this.formAddMetodoPagamento.bind(this);
    this.formAddTag = this.formAddTag.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  formAddValor() {
    return (
      <label htmlFor="valor">
        Valor:
        <input
          id="valor"
          type="number"
          name="valor"
          value={ this.valor }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formAddDescricao() {
    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          id="descricao"
          type="text"
          name="descricao"
          value={ this.descricao }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formAddMoeda() {
    let { currencies } = this.props;

    if (currencies === undefined) {
      currencies = { noCodeReturned: 'não retornou dados da API' };
    }

    const codes = Object.keys(currencies)
      .filter((currencyCode) => currencyCode !== 'USDT');

    return (
      <label htmlFor="moeda">
        Moeda:
        <select id="moeda" value="currency" onChange={ this.handleChange }>
          { codes.map((code) => <option key={ code } value={ code }>{ code }</option>) }
        </select>
      </label>
    );
  }

  formAddMetodoPagamento() {
    return (
      <label htmlFor="payWay">
        Método de pagamento:
        <select id="payWay" onChange={ this.handleChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  formAddTag() {
    return (
      <label htmlFor="tag" onChange={ this.handleChange }>
        Tag:
        <select id="tag">
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
        { this.formAddValor() }
        { this.formAddDescricao() }
        { this.formAddMoeda() }
        { this.formAddMetodoPagamento() }
        { this.formAddTag() }
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.string),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.walletReducer.currencies,
});

export default connect(mapStateToProps)(WalletForm);
