import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAwesomeApi } from '../actions';

class ExpenseForm extends React.Component {
  componentDidMount() {
    const { fetchcoin } = this.props;

    fetchcoin();
  }

  render() {
    const { arrayCoin } = this.props;
    return (
      <form>
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
            {arrayCoin.map((coin) => <option value={ coin } key={ coin }>{coin}</option>)}
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de Pagamento
          <select id="pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="despesa">
          Tag
          <select id="despesa">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchcoin: () => dispatch(fetchAwesomeApi()),
});

const mapStateToProps = (state) => ({
  arrayCoin: state.wallet.currencies,
});

ExpenseForm.propTypes = {
  arrayCoin: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
