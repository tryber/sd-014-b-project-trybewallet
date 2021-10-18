import React from 'react';

class WalletForm extends React.Component {
  constructor() {
    super();
    this.formAddValor = this.formAddValor.bind(this);
    this.formAddDescricao = this.formAddDescricao.bind(this);
    this.formAddMoeda = this.formAddMoeda.bind(this);
    this.formAddMetodoPagamento = this.formAddMetodoPagamento.bind(this);
    this.formAddTag = this.formAddTag.bind(this);
  }

  formAddValor() {
    return (
      <label htmlFor="valor">
        Valor:
        <input
          id="valor"
          type="number"
          name="valor"
          value=" "
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
          value=" "
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  formAddMoeda() {
    return (
      <label htmlFor="moeda">
        Moeda:
        <select id="moeda">
          <option value="" data-testid="select-option">vazio</option>
          <option value="action" data-testid="select-option">outro vazio</option>
        </select>
      </label>
    );
  }

  formAddMetodoPagamento() {
    return (
      <label htmlFor="payWay">
        Método de pagamento:
        <select id="payWay">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  formAddTag() {
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
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

export default WalletForm;
