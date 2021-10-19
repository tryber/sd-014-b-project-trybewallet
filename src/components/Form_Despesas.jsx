import React from "react";


class Form_Despesas extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: '0,00',
      descricao: '',
      moeda: '',
      pagamento: '',
      tag: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( {target} ) {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { valor, descricao, moeda, pagamento, tag } = this.state;
    return (
      <section>
        <label htmlFor="valor">
          Valor
          <input
            id="valor" 
            type="number"
            name="valor"
            value = { valor }
            onChange = { this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            id="descricao"
            type="text"
            name="descricao" 
            value={ descricao }
            onChange = { this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="moeda"
            value={ moeda }
            onChange={ this.handleChange } 
          >
            <option value="">Selecione</option>
          </select>  
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            id="pagamento"
            name="pagamento"
            value={ pagamento }
            onChange={ this.handleChange }
          >
            <option value="">Selecione</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="">Selecione</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </section>
    )
  }
}

export default Form_Despesas;