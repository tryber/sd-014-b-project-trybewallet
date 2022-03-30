import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableHead from './TableHead';
import { deleteExpense } from '../actions';

class Table extends Component {
  handleClick = (id) => {
    const { removeExpense } = this.props;
    removeExpense(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <section className="section-table-wallet">
        <TableHead />
        <table className="table-info-wallet">
          <tbody className="table-info-wallet">
            { expenses.map((item) => {
              const {
                id, description, tag, method, value, currency, exchangeRates,
              } = item;
              const exchangeRateInfo = Number(exchangeRates[currency].ask);
              const exchangeValue = Number(value) * exchangeRateInfo;
              return (
                <tr key={ id } className="table-info-wallet">
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ exchangeRates[currency].name }</td>
                  <td>{ exchangeRateInfo.toFixed(2) }</td>
                  <td>{ exchangeValue.toFixed(2) }</td>
                  <td>Real</td>
                  <td className="table-btn-wallet">
                    <button
                      className="edit-btn"
                      type="button"
                      data-testid="edit-btn"
                    >
                      Editar
                    </button>
                    <button
                      className="delete-btn"
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => this.handleClick(id) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(deleteExpense(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  removeExpense: PropTypes.func.isRequired,
};

Table.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
