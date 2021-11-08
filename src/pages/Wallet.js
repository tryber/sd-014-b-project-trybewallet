import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Select from '../components/Select';
import { fetchCurrencies, addExpenses } from '../actions';

const payMethod = ['Cartão de crédito', 'Cartão de débito', 'Dinheiro'];
const tags = ['Lazer', 'Trabalho', 'Alimentação', 'Transporte', 'Saúde'];

class Wallet extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { handleCurrencies } = this.props;
    handleCurrencies();
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    const { handleCurrencies, addExpense } = this.props;
    handleCurrencies();
    addExpense(this.state);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  renderWallet() {
    const { currency, method, tag } = this.state;
    const { moedas } = this.props;

    return (
      <>
        <Select
          field="currency"
          label="Moeda:"
          array={ moedas }
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          field="method"
          label="Método de pagamento:"
          array={ payMethod }
          value={ method }
          onChange={ this.handleChange }
        />
        <Select
          field="tag"
          label="Tag:"
          array={ tags }
          value={ tag }
          onChange={ this.handleChange }
        />
      </>
    );
  }


  

  render() {
    const { moedas } = this.props;
    const { value, description } = this.state;
    return (
      <>
        <Header />
        <form>
          <label htmlFor="expense">
            Valor:
            <input
              type="text"
              name="value"
              id="expense"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          {this.renderWallet()}
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  handleCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (state) => dispatch(addExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
