import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './headerExpenses';
import { clearAction } from '../actions';

class Table extends React.Component {
  delete(id) {
    const { clearExpense } = this.props;
    clearExpense(id);
  }

  render() {
    const { allExpenses } = this.props;
    return (
      <table>
        <Header />
        <tbody>
          { allExpenses.map(({ id, value, description,
            currency, method, tag, exchangeRates,
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <input
                  type="button"
                  value="Editar"
                  data-testid="edit-btn"

                />
                <input
                  type="button"
                  value="Excluir"
                  data-testid="delete-btn"
                  onClick={ this.delete(id) }
                />
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  allExpenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  clearExpense: (id) => dispatch(clearAction(id)),
});
Table.propTypes = {
  clearExpense: PropTypes.func.isRequired,
  allExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
