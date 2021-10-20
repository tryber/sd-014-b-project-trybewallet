import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Forms extends React.Component {
  addMoeda() {
    const { currency } = this.props;
    console.log(currency);
    if (currency === undefined) {
      return 'nao retornou dados da API';
    }
    const filterCurrency = Object.keys(currency)
      .filter((filtered) => filtered !== 'USDT');
    console.log(filterCurrency);
    return (
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" value="moeda">
          { filterCurrency.map((coin) => (
            <option
              key={ coin }
              value={ coin }
            >
              { coin }
            </option>)) }
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            id="valor"
            name="valor"
          />
        </label>
        <label htmlFor="descrição">
          Descrição
          <input
            type="text"
            id="descrição"
            name="descrição"
          />
        </label>
        {this.addMoeda()}
        <label htmlFor="pagamento">
          Método de pagamento
          <select id="pagamento" name="pagamento">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Credito">Cartão de crédito</option>
            <option value="Debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Forms.propTypes = {
  currency: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    currency: state.currencyReducer.currency,
  };
}

export default connect(mapStateToProps)(Forms);
