import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableRow extends React.Component {
  render() {
    const { expensesWallet } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Cambio</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/excluir</th>
          </tr>
        </thead>
        <tbody>
          {expensesWallet.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{`${expense.value} ${expense.currency}`}</td>
              <td>{expense.currency}</td>
              <td>.</td>
              <td>
                {`R$
               ${expense.value * expense.exchangeRates[expense.currency].ask} `}
              </td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button type="button">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesWallet: state.wallet.expenses,
});

TableRow.propTypes = {
  expensesWallet: PropTypes.arrayOf([
    PropTypes.any,
  ]),
};

TableRow.defaultProps = {
  expensesWallet: [],
};

export default connect(mapStateToProps)(TableRow);
