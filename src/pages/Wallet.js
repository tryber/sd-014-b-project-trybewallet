import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.header = this.header.bind(this);
  }

  header() {
    const { email } = this.props; // email do estado que é passado por props la no login page que é o estado compartilhado.
    return (
      <section className="header_container">
        <div>
          Email:
          <span data-testid="email-field">{email}</span>
        </div>
        <div>
          Despesa total: R$
          <span data-testid="total-field">0</span>
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </section>
    );
  }

  render() {
    return (
      <div>
        TrybeWallet
        {this.header()}
        <form className="add_despesas_container">
          <label htmlFor="valor">
            Valor:
            <input
              type="number"
              min="0.0"
              step="0.01"
              name="valor"
              id="valor"
            />
          </label>
          <label htmlFor="Descricao">
            Descrição
            <input type="text" name="Descricao" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda" id="moeda">
              <option value="BRL">BRL</option>
            </select>
          </label>
          <label htmlFor="pagamento" id="pagamento">
            <select name="metodo_de_pagamento" id="pagamento">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select name="tag" id="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer" selected>Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
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

export default connect(mapStateToProps)(Wallet);
