import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpenses } from '../actions/walletAction';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onButtonAdicionarDespesa = this.onButtonAdicionarDespesa.bind(this);

    this.formAddValor = this.formAddValor.bind(this);
    this.formAddDescricao = this.formAddDescricao.bind(this);
    this.formAddMoeda = this.formAddMoeda.bind(this);
    this.formAddMetodoPagamento = this.formAddMetodoPagamento.bind(this);
    this.formAddTag = this.formAddTag.bind(this);

    this.state = {
      // id: 0,
      value: '',
      description: '',
      currency: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      // exchangeRates: '',
    };
  }

  onButtonAdicionarDespesa() {
    const { dispatchSaveExpenses } = this.props;
    dispatchSaveExpenses(this.state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  formAddValor() {
    const { value } = this.state;
    return (
      <label htmlFor="valor">
        Valor:
        <input
          id="valor"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formAddDescricao() {
    const { description } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição:
        <input
          id="descricao"
          type="text"
          name="description"
          value={ description }
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

    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { codes.map((code) => (
            <option key={ code } value={ code }>
              { code }
            </option>))}
        </select>
      </label>
    );
  }

  formAddMetodoPagamento() {
    const { method } = this.state;
    return (
      <label htmlFor="payWay">
        Método de pagamento:
        <select
          id="payWay"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  formAddTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag" onChange={ this.handleChange }>
        Tag:
        <select
          id="tag"
          name="tag"
          value={ tag }
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
        { this.formAddValor() }
        { this.formAddDescricao() }
        { this.formAddMoeda() }
        { this.formAddMetodoPagamento() }
        { this.formAddTag() }
        <button
          type="button"
          onClick={ this.onButtonAdicionarDespesa }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.objectOf(
    PropTypes.objectOf(PropTypes.string),
  ).isRequired,
  dispatchSaveExpenses: PropTypes.func.isRequired,
};

// atualizando dados do form ao clicar no botão onButtonAdicionarDespesa
const mapDispatchToProps = (dispatch) => ({
  dispatchSaveExpenses: (value) => dispatch(saveExpenses(value)),
});

// trazendo state do currency ao abrir página
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
