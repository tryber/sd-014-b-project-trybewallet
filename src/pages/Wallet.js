import React from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header';
import InputForm from '../component/InputForm';
import SelectForm from '../component/SelectForm';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      coins: [],
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.fetchCoins = this.fetchCoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  objExpense: (expense) => dispatch(handleWalletExpenses(expense)),
});

const mapStateToProps = (state) => ({
  listOfExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
