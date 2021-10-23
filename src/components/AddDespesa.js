import React from 'react';

class AddDespesa extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.descricao = this.descricao.bind(this);
    this.state = {
      valor: '',
      moeda: '',
      pagamento: '',
      tag: '',
      descricao: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  descricao() {
    const { descricao } = this.state;
    return (
      <label htmlFor="descricao">
        Descrição
        <input
          type="text"
          name="descricao"
          id="descricao"
          onChange={ this.handleChange }
          value={ descricao }
        />
      </label>
    );
  }

  render() {
    const { valor, moeda, pagamento, tag } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
            name="valor"
            onChange={ this.handleChange }
            value={ valor }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" onChange={ this.handleChange } value={ moeda }>
            <option>BRL</option>
            <option>USD</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            name="pagamento"
            id="pagamento"
            onChange={ this.handleChange }
            value={ pagamento }
          >
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
            <option>Dinheiro</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange } value={ tag }>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Alimentação</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        { this.descricao() }
        <button type="button">Adicionar dispesa</button>
      </form>
    );
  }
}

export default AddDespesa;
