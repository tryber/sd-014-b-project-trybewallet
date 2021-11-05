import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Select from '../components/Select';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      spent: 0,
    };
  }

  async apiCoins() {
    const URL_API_MONEY = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await URL_API_MONEY.json();
    console.log(response);
    return response;
  }

  render() {
    const { userEmail } = this.props;
    const { spent } = this.state;
    return (
      <header>
        <h3 data-testid="email-field">{ userEmail }</h3>
        <form>
          <label htmlFor="money-by" data-testid="total-field">
            Valor:
            <input
              type="number"
              id="money-by"
            />
            { spent }
          </label>
          <label htmlFor="moeda">
            Moeda
            <select data-testid="header-currency-field" id="moeda">
              <option>BRL</option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento
            <select id="pagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <Select
            labelhtmlfor="tag"
            description="Tag"
            optionone="Alimentação"
            optiontwo="Lazer"
            optionthree="Trabalho"
            optionfour="Transporte"
            optionfive="Saúde"
          />
          <label htmlFor="descrição">
            Descrição:
            <input type="text" id="descrição" />
          </label>
          <button type="button">Adicionar despesas</button>
        </form>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
