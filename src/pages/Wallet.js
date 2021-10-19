import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <>
        <header>
          <p data-testid="email-field">{ user }</p>
          <p data-testid="total-field"> 0</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="valor">
            Valor:
            <input id="valor" type="text" />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <input id="descrição" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select id="moeda">
              <option> Default </option>
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de pagamento:
            <select id="pagamento">
              <option id="pagamento"> Dinheiro </option>
              <option id="pagamento"> Cartão de crédito </option>
              <option id="pagamento"> Cartão de débito </option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select id="tag">
              <option id="tag">Alimentação</option>
              <option id="tag">Lazer</option>
              <option id="tag">Trabalho</option>
              <option id="tag">Transporte</option>
              <option id="tag">Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Wallet.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
