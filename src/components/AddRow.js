import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class AddRow extends React.Component {
  valorTotal = (ask, value) => (Number(ask * value)).toFixed(2);

  render() {
    const { expensesWallet } = this.props;

    return (
      expensesWallet.map((expense) => (
        <tr key={ expense.id }>
          <td>{ expense.description }</td>
          <td>{ expense.tag }</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          <td>{ expense.exchangeRates[expense.currency].name}</td>
          <td>{ (Number(expense.exchangeRates[expense.currency].ask)).toFixed(2) }</td>
          <td>
            { this.valorTotal(
              expense.value, expense.exchangeRates[expense.currency].ask,
            ) }
          </td>
          <td>Real</td>
          <td>
            <button type="button">Editar</button>
            <button type="button">Excluir</button>
          </td>
        </tr>
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  expensesWallet: state.wallet.expenses,
});

AddRow.propTypes = {
  expensesWallet: PropTypes.arrayOf([
    PropTypes.any,
  ]),
};

AddRow.defaultProps = {
  expensesWallet: [],
};

export default connect(mapStateToProps)(AddRow);
