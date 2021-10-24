import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { requestMoedas } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { salvaMoedas } = this.props;
    const MoedasAPI = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(MoedasAPI);
    const responseJson = await response.json();
    const moedas = await responseJson;
    const filtrandoApi = Object.keys(moedas).filter((moeda) => moeda !== 'USDT');
    salvaMoedas(filtrandoApi);
  }

  render() {
    return (
      <main>
        <Header />
        <form>
          <label htmlFor="valor">
            Valor
            <input id="valor" type="text" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input id="descricao" type="text" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              <option>oi</option>

            </select>
          </label>
          <label htmlFor="metodoDePagamento">
            Método de pagamento
            <select id="metodoDePagamento">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="moeda">
            Tag
            <select id="categoria">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  salvaMoedas: (payload) => dispatch(requestMoedas(payload)),
});

Wallet.propTypes = {
  salvaMoedas: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
