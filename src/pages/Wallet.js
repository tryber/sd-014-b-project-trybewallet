import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../components/forms';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      moedas: [],
    };
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  componentDidMount() {
    this.getCurrencies();
  }

  async getCurrencies() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const result = Object.keys(data).filter((coin) => coin !== 'USDT');
    console.log(result);
    this.setState({ moedas: result });
  }

  render() {
    const { moedas } = this.state;
    const { currencies, expenses, email } = this.props;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">0</h2>
          <h2 data-testid="header-currency-field">{currencies}</h2>
        </header>
        <Form moedas={ moedas } />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  email: state.user.email,
});

Wallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
