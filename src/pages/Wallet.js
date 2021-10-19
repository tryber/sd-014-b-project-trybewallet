import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Wallet({ email }) {
  const INITIAL_VALUE = 0;
  return (
    <>
      <header className="header">
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ INITIAL_VALUE }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency">
            <option value="real">BRL</option>
          </select>
        </label>
        <label htmlFor="paymentOptions">
          Método de pagamento:
          <select name="paymentOptions" id="paymentOptions">
            <option value="moneyOption">Dinheiro</option>
            <option value="creditOption">Cartão de crédito</option>
            <option value="debitOption">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="foodOption">Alimentação</option>
            <option value="funOption">Lazer</option>
            <option value="workOption">Trabalho</option>
            <option value="transportOption">Transporte</option>
            <option value="healthOption">Saúde</option>
          </select>
        </label>
      </form>
    </>
  );
}

function mapStateToProps({ user: { email } }) {
  return { email };
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
