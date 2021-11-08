import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clearAction } from '../actions';
import Headertable from './headerExpenses';

class Table extends React.Component {
  deleteExpenses(id) {
    const { clearExpense } = this.props;
    clearExpense(id);
  }

  render() {
    const { allExpenses } = this.props;
    return (
      <table>
        <Headertable />
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
                  onClick={ () => this.deleteExpenses(id) }
                />
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clearExpense: (id) => dispatch(clearAction(id)),
});

Table.propTypes = {
  allExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  clearExpense: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Table);
