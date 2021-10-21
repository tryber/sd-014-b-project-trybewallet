import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setWalletExpenses, fetchWallet } from '../actions';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import Tabela from '../components/Tabela';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { fetchWalletApi } = this.props;

    fetchWalletApi();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { walletExpenses } = this.props;

    const getApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    this.setState({
      exchangeRates: await getApi.json(),
    });

    await walletExpenses(this.state);

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  toTable = () => {
    const { expenses } = this.props;

    if (expenses.length > 0) {
      return (
        expenses.map((each, index) => (
          <tbody key={ index }>
            <tr>
              <td>{ each.description }</td>
              <td>{ each.tag }</td>
              <td>{ each.method }</td>
              <td>{ each.value }</td>
              <td>{ each.exchangeRates[each.currency].name }</td>
              <td>{ (+each.exchangeRates[each.currency].ask).toFixed(2) }</td>
              <td>
                {Number.isInteger(each.value * each.exchangeRates[each.currency].ask)
                  ? each.value * each.exchangeRates[each.currency].ask
                  : (each.value * each.exchangeRates[each.currency].ask).toFixed(2) }
              </td>
              <td>Real</td>
              <td>teste</td>
            </tr>
          </tbody>
        ))
      );
    }
  }

  valueChange = () => {
    const { expenses } = this.props;
    let valor = 0;

    if (expenses.length > 0) {
      // reducer feito com auxílio de Beatriz Ribeiro, maravilhosa!
      valor = expenses.reduce((acc, curr) => {
        acc += Number(curr.value) * curr.exchangeRates[curr.currency].ask;
        return acc;
      }, 0);
      return valor;
    }
    return valor;
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { email, currencies } = this.props;
    const currenciesFiltered = currencies.filter((currenty) => currenty !== 'USDT');
    return (
      <section>
        <Header email={ email } total={ this.valueChange } />
        <form>
          <Input
            name="value"
            value={ value }
            handleChange={ this.handleChange }
            label="Valor"
          />
          <Input
            name="description"
            value={ description }
            handleChange={ this.handleChange }
            label="Descrição"
          />
          <Select
            name="currency"
            array={ currenciesFiltered }
            value={ currency }
            handleChange={ this.handleChange }
            label="Moeda"
          />
          <Select
            name="method"
            array={ paymentMethods }
            value={ method }
            handleChange={ this.handleChange }
            label="Método de pagamento"
          />
          <Select
            name="tag"
            array={ category }
            value={ tag }
            handleChange={ this.handleChange }
            label="Tag"
          />
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
        <Tabela toTable={ this.toTable } />
      </section>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchWalletApi: PropTypes.func.isRequired,
  walletExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchWalletApi: () => dispatch(fetchWallet()),
  walletExpenses: (expense) => dispatch(setWalletExpenses(expense)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
