import React from 'react';

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="valor">
          Valor
          <input id="valor" type="text" value={ value } onChange={ this.handleChange } />
        </label>

        <label htmlFor="desc">
          Descrição
          <input id="desc" type="text" value={ value } onChange={ this.handleChange } />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select id="moeda" value={ value } onChange={ this.handleChange }>
            <option value="brl">BRL</option>
          </select>
        </label>

        <label htmlFor="pay">
          Método de pagamento
          <select id="pay" value={ value } onChange={ this.handleChange }>
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select id="tag" value={ value } onChange={ this.handleChange }>
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>

          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default Inputs;
