import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAPI from '../services/fetchAPI';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = { currencies: [] };

    this.pushOptions = this.pushOptions.bind(this);
  }

  async componentDidMount() {
    const resolve = await fetchAPI();
    const currency = [];
    Object.keys(resolve).map((option) => {
      if (option !== 'USDT') {
        currency.push(option);
      }
      return currency;
    });
    this.pushOptions(currency);
  }

  pushOptions(currency) {
    this.setState({
      currencies: currency,
    });
  }

  render() {
    const { currencies } = this.state;
    const { email } = this.props;
    return (
      <div>
        <header>
          <h2 data-testid="email-field">{ email }</h2>
          <p data-testid="total-field">0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" id="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" id="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select id="currency">
              { currencies.map((option, index) => (
                <option key={ index }>{ option }</option>))}
            </select>
          </label>
          <label htmlFor="payment-method">
            Método de pagamento
            <select id="payment-method">
              <option value="money">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
