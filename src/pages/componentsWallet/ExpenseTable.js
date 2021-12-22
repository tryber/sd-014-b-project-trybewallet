import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { VscEdit, VscTrash } from 'react-icons/vsc';
import {
  removeExpenses as deleteExpense,
  editExpenses,
} from '../../actions/index';
import './ExpenseTable.css';

class ExpenseTable extends Component {
  constructor() {
    super();

    this.buttonDelete = this.buttonDelete.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  // Nesta parte eu consultei o repositório do Rodolfo Braga
  // Fonte: https://github.com/tryber/sd-014-b-project-trybewallet/pull/58/commits/181158095530fc1a2eff65c7e61e182f84db0593
  buttonDelete(id) {
    const { removeExpenses } = this.props;
    removeExpenses(id);
  }

  editExpense(id) {
    const { editExpense } = this.props;
    return (
      <button
        data-testid="edit-btn"
        onClick={ () => editExpense(id) }
        type="button"
        className="btn-edit-table btn"
      >
        <VscEdit className="btn-image" />
      </button>
    );
  }

  renderButton() {
    const { expenses } = this.props;
    const currencyValue = expenses.map((id) => id.currency);
    return (
      <tbody>
        {expenses.map((number, index) => (
          <tr key={ number.id }>
            <td>{number.description}</td>
            <td>{number.tag}</td>
            <td>{number.method}</td>
            <td>{number.value}</td>
            <td>{number.exchangeRates[currencyValue[index]].name.split('/')[0]}</td>
            <td>
              {Number(number.exchangeRates[currencyValue[index]].ask).toFixed(2)}
            </td>
            <td>
              {Number(number.value * number.exchangeRates[
                currencyValue[index]].ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              { this.editExpense(number.id) }
              <button
                data-testid="delete-btn"
                onClick={ () => this.buttonDelete(number.id) }
                type="button"
                className="btn-table btn"
              >
                <VscTrash className="btn-image" />
              </button>
            </td>
          </tr>))}
      </tbody>);
  }

  render() {
    return (
      <section className="table-component">
        <table className="table-expense">
          <thead>
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
          </thead>
          { this.renderButton() }
        </table>
      </section>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
  removeExpenses: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id) => dispatch(editExpenses(id)),
  removeExpenses: (id) => dispatch(deleteExpense(id)),
});

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
