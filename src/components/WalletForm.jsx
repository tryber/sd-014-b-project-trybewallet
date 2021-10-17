import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCoins } from '../actions';

class WalletForm extends React.Component {
  async componentDidMount() {
    const { receiveCoins } = this.props;
    await receiveCoins();
  }

  render() {
    const { allCoins } = this.props;
    return (
      <form>
        <label htmlFor="input-despesas">
          Valor:
          <input id="input-despesas" type="text" />
        </label>
        <label htmlFor="input-descricao">
          Descrição:
          <input id="input-descricao" type="text" />
        </label>
        <label htmlFor="select-moeda">
          Moeda:
          <select id="select-moeda">
            { allCoins.map((coin, id) => <option key={ id }>{ coin }</option>) }
          </select>
        </label>
        <label htmlFor="select-pagamento">
          Método de pagamento:
          <select id="select-pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag:
          <select id="select-tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

WalletForm.propTypes = {
  receiveCoins: PropTypes.func.isRequired,
  allCoins: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  receiveCoins: async () => dispatch(await fetchCoins()),
});

const mapStateToProps = (globalState) => ({
  allCoins: globalState.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
