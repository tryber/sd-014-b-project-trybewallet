import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesAPI } from '../actions';

class Forms extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    const { coins } = this.props;
    console.log(coins);
    return (
      <form>
        <label htmlFor="input-expense">
          Valor
          <input type="number" id="input-expense" name="expense" />
        </label>
        <label htmlFor="input-description">
          Descrição
          <input id="input-description" name="description" type="text" />
        </label>
        <label htmlFor="input-coin">
          Moeda
          <select id="input-coin" name="coin">
            {coins.map((coin) => (
              <option value={ coin } key={ coin }>
                {coin}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="input-method">
          Método de pagamento
          <select name="method" id="input-method">
            <option value="money">Dinheiro</option>
            <option value="debit">Cartão de débito</option>
            <option value="credit">Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select name="tag" id="input-tag">
            <option value="laze">Lazer</option>
            <option value="food">Alimentação</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Forms.propTypes = {
  getCoins: PropTypes.func.isRequired,
  coins: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};
const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCurrenciesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
