import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenses } from '../actions';

class TableBody extends Component {
  deleteExpenses(id) {
    const { deleteExp } = this.props;
    deleteExp(id);
  }

  render() {
    const { arrayExpenses } = this.props;

    return (
      <tbody>
        { arrayExpenses
          .map(({ id, value, description, currency, method, tag, exchangeRates }) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.deleteExpenses(id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    );
  }
}
// Requisito 9 completo com ajuda do Matheus Gonzaga em call
const mapStateToProps = (state) => ({
  arrayExpenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(deleteExpenses(id)),
});
// Requisito 10 completo com ajuda do Grupo Online Store :D
TableBody.propTypes = {
  arrayExpenses: PropTypes.arrayOf(PropTypes.Object).isRequired,
  deleteExp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
