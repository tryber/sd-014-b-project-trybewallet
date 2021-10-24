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
    const { moedas } = this.props;
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
              { moedas.map((moeda) => <option key={ moeda }>{ moeda }</option>)}
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
        <button type="button">
          Adicionar despesa
        </button>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  moedas: state.wallet.moedas,
});

const mapDispatchToProps = (dispatch) => ({
  salvaMoedas: (payload) => dispatch(requestMoedas(payload)),
});

Wallet.propTypes = {
  salvaMoedas: PropTypes.func.isRequired,
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
