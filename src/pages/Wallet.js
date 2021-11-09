import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';
import { addExpense, fetchCurrencies } from '../actions/index';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.fetchCoins = this.fetchCoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchCoins();
  }

  async fetchCoins() {
    const fetchedCoins = await fetch('https://economia.awesomeapi.com.br/json/all');
    const coins = await fetchedCoins.json();
    const coinsArray = Object.keys(coins);
    this.setState({
      coins: coinsArray.filter((item) => item !== 'USDT'),
    });
  }

  async handleClick(event) {
    event.preventDefault();
    const { id, currency, method, tag, description, value } = this.state;
    const { onSubmit } = this.props;

    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await api.json();

    this.setState((prevState) => ({ id: prevState.id + 1 }));
    onSubmit({ value, description, exchangeRates, id, currency, method, tag });
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { coins, value, description, currency, method, tag } = this.state;
    return (
      <div>
        <Header />
        <form>
          <InputForm
            handleChange={ this.handleChange }
            value={ value }
            description={ description }
          />
          <SelectForm
            handleChange={ this.handleChange }
            currency={ currency }
            method={ method }
            tag={ tag }
            coins={ coins }
          />

          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  currencies: wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  onSubmit: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
