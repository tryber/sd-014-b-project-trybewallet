import React from 'react';
import { connect } from 'react-redux';
import { fetchAwesomeApi } from '../actions';
import getCoins from '../sevicesAPI/moedasAPI';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      typeOfCoins: [],
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };

    this.requestCoinsAndPutInTheState = this.requestCoinsAndPutInTheState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.requestCoinsAndPutInTheState();
  }

  async requestCoinsAndPutInTheState() {
    const typeOfCoins = await getCoins();
    const changeForArray = Object.values(typeOfCoins);
    changeForArray.splice(1, 1);
    this.setState({ typeOfCoins: changeForArray });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(callback1) {
    const { value, description, currency, method, tag } = this.state;
    const objExpense = {
      value,
      description,
      currency,
      method,
      tag,
    };
    callback1(objExpense);
  }

  // eslint-disable-next-line max-lines-per-function
  render() {
    const { createObjectOfExpenses } = this.props;
    const { typeOfCoins, value, description } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            onChange={ this.handleChange }
            value={ value }
            type="text"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            onChange={ this.handleChange }
            value={ description }
            type="text"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select onChange={ this.handleChange } name="currency" id="currency">
            {typeOfCoins.map(({ code }, index) => (
              <option name="currency" value={ code } key={ index }>{code}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select onChange={ this.handleChange } name="method" id="method">
            <option name="method" value="Dinheiro">Dinheiro</option>
            <option name="method" value="Cartão de crédito">Cartão de crédito</option>
            <option name="method" value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ this.handleChange } name="tag" id="tag">
            <option name="tag" value="Transporte">Transporte</option>
            <option name="tag" value="Alimentação">Alimentação</option>
            <option name="tag" value="Lazer">Lazer</option>
            <option name="tag" value="Trabalho">Trabalho</option>
            <option name="tag" value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          onClick={ () => this.handleClick(createObjectOfExpenses) }
          type="button"
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesList: state.wallet,
});

const mapDispatchToProps = (dispath) => ({
  createObjectOfExpenses: (expense) => dispath(fetchAwesomeApi(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
