import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, updateTotalExpenses } from '../actions';

class TableRow extends Component {
  componentDidUpdate() {
    const { updateTotal } = this.props;
    updateTotal();
  }

  render() {
    const {
      expenseObj: { id, description, tag, method, value, currency, exchangeRates },
      deleteExp,
      updateTotal,
      handleEditing,
    } = this.props;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{Number.isInteger(+value) ? value : (+value).toFixed(2)}</td>
        <td>{exchangeRates[currency].name.split('/')[0]}</td>
        <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{ Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            id="edit-btn"
            type="button"
            data-testid="edit-btn"
            onClick={ () => { handleEditing(id); } }
          >
            Edit
          </button>
          <button
            id="delete-btn"
            data-testid="delete-btn"
            type="button"
            onClick={ () => {
              deleteExp(id);
              updateTotal();
            } }
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  expenseObj: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
    currency: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
  deleteExp: PropTypes.func.isRequired,
  updateTotal: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(deleteExpense(id)),
  updateTotal: () => dispatch(updateTotalExpenses()),
});

export default connect(null, mapDispatchToProps)(TableRow);
