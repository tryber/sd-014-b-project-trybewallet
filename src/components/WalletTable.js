import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import ButtonDelete from './ButtonDelete';

class WalletTable extends Component {
  renderTableRows() {
    const { expensesProp } = this.props;
    if (expensesProp.length === 0) return;
    return (
      expensesProp.map((expanse) => {
        const { value, currency, exchangeRates } = expanse;
        const valueFloat = parseFloat(value);
        const askFloat = parseFloat(exchangeRates[currency].ask);
        const conversionValue = valueFloat * askFloat;
        return (
          <tr key={ expanse.id }>
            <td>{ expanse.description }</td>
            <td>{ expanse.tag }</td>
            <td>{ expanse.method }</td>
            <td>{ `${valueFloat}` }</td>
            <td>{ exchangeRates[currency].name }</td>
            <td>{ `${askFloat.toFixed(2)}` }</td>
            <td>{ conversionValue.toFixed(2) }</td>
            <td>Real</td>
            <td>
              <ButtonDelete expenseId={ expanse.id } />
            </td>
          </tr>
        );
      })
    );
  }

  render() {
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { this.renderTableRows() }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesProp: state.wallet.expenses,
});

WalletTable.propTypes = {
  expensesProp: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

export default connect(mapStateToProps, null)(WalletTable);
