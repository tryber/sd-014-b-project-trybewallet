import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends Component {
  renderExpenses(exp) {
    return exp.map(({ id, description, tag, method, value, currency, exchangeRates }) => {
      const val = parseFloat(value);
      const ask = parseFloat(exchangeRates[currency].ask);
      return (
        <tr key={ id } id={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{`${val}`}</td>
          <td>{exchangeRates[currency].name}</td>
          <td>{`${ask.toFixed(2)}`}</td>
          <td>{`${(val * ask).toFixed(2)}`}</td>
          <td>Real</td>
          <td>Edit/Del</td>
        </tr>
      );
    });
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="wallet-table">
        <tbody>
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
          { this.renderExpenses(expenses) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};
