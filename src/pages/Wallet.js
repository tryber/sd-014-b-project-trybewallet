import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { resultApi } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { armazeApiEstadoGlobal } = this.props;
    armazeApiEstadoGlobal();
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="addValue">
            Valor:
            <input type="text" id="addValue" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea id="description" cols="30" rows="10" />
          </label>
          <label htmlFor="expense-currency">
            Moeda
            <select id="expense-currency">
              {
                currencies.map((currency) => (
                  currency !== 'USDT'
                    ? <option key={ currency }>{currency}</option> : ''))
              }
            </select>
          </label>
          <label htmlFor="payment">
            Método de pagamento
            <select id="payment">
              <option value="dinheiro" id="dinheiro">Dinheiro</option>
              <option value="credito" id="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
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
        </form>
      </div>
    );
  }
}

Wallet.propTypes = {
  currencies: PropTypes.func.isRequired,
  armazeApiEstadoGlobal: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    currencies: state.wallet.currencies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    armazeApiEstadoGlobal: () => dispatch(resultApi()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
