import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFetch } from '../actions';

class MainWallet extends Component {
  componentDidMount() {
    const { getFetchCurrencie } = this.props;
    getFetchCurrencie();
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        <label htmlFor="valor">
          Valor
          <input type="text" id="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            { currencies.map((currencie) => (
              <option key={ currencie } value={ currencie }>{ currencie }</option>))}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento">
            <option key="cash" value="cash">Dinheiro</option>
            <option key="credito" value="credito">Cartão de crédito</option>
            <option key="debito" value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="despesa">
          Tag
          <select id="despesa">
            <option key="alimentacao" value="alimentacao">Alimentação</option>
            <option key="lazer" value="lazer">Lazer</option>
            <option key="trabalho" value="trabalho">Trabalho</option>
            <option key="transporte" value="transporte">Transporte</option>
            <option key="saude" value="saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

MainWallet.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  getFetchCurrencie: PropTypes.func.isRequired,
};

const mapState = ({ wallet }) => ({
  currencies: wallet.currencies,
});

const mapDispatch = (dispatch) => ({
  getFetchCurrencie: () => dispatch(getFetch()),
});

export default connect(mapState, mapDispatch)(MainWallet);
