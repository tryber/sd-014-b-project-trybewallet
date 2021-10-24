import React from 'react';

class AddDespesa extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.descricao = this.descricao.bind(this);
    this.currencyOptions = this.currencyOptions.bind(this);
    this.requestCurrency = this.requestCurrency.bind(this);
    this.state = {
      valor: '',
      moeda: '',
      pagamento: '',
      tag: '',
      descricao: '',
      currencies: [],
    };
  }

  componentDidMount() {
    this.requestCurrency();
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  async requestCurrency() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currencyData = await response.json();
    const keys = Object.keys(currencyData);
    const filteredCurrencies = keys.filter((currency) => currency !== 'USDT');
    console.log(filteredCurrencies);
    this.setState({
      currencies: filteredCurrencies,
    });
  }

  currencyOptions() {
    const { currencies } = this.state;
    console.log(currencies);
    return currencies.map((currency, index) => (
      <option key={ index }>{ currency }</option>
    ));
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
            { this.currencyOptions() }
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
