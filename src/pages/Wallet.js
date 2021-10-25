import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, saveExpenses } from '../actions';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const { dispatchCurrencies } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    delete data.DOGE;
    this.setState({ exchangeRates: data });
    dispatchCurrencies(data);
  }

  // Função totalExpenses retirada do repositório do Fabrício Cardoso, ref: https://github.com/tryber/sd-014-b-project-trybewallet/pull/106/commits/38b0703ddbeea742823f5ddc503a4daf020d83c8

  totalExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((total, { currency, value, exchangeRates }) => {
      const quotation = exchangeRates[currency].ask;
      return total + (Number(quotation) * Number(value));
    }, 0);
  }

  handleClick() {
    const { dispatchExpenses } = this.props;
    this.getCurrencies();
    dispatchExpenses(this.state);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { user, currencies, expenses } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ user }</p>
          <p data-testid="total-field">
            {expenses.length === 0 ? 'R$ 0.00' : `R$ ${this.totalExpenses().toFixed(2)}`}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <Input type="text" name="value" id="valor" onChange={ this.handleChange } />
          <Input
            type="text"
            id="descrição"
            name="description"
            onChange={ this.handleChange }
          />
          <Select
            title="Moeda"
            name="currency"
            options={ currencies }
            onChange={ this.handleChange }
          />
          <Select
            title="Método de pagamento:"
            id="pagamento"
            name="method"
            options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            onChange={ this.handleChange }
          />
          <Select
            title="Tag:"
            name="tag"
            id="tag"
            options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            onChange={ this.handleChange }
          />
          <button type="button" onClick={ this.handleClick }> Adicionar despesa </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (currencies) => dispatch(getCurrencies(currencies)),
  dispatchExpenses: (expense) => dispatch(saveExpenses(expense)),
});

Wallet.propTypes = {
  user: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchCurrencies: PropTypes.func.isRequired,
  dispatchExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
