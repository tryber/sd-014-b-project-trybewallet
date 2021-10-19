import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormWallet extends Component {
  render() {
    const { coins } = this.props;
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {coins.map((currency) => (
              <option key={ currency } value={ currency }>
                { currency }
              </option>))}
          </select>
        </label>
        <label htmlFor="metodoPagamento">
          Método de pagamento
          <select id="metodoPagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

FormWallet.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({ coins: state.wallet.coins });

export default connect(mapStateToProps)(FormWallet);
