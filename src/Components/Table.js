import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { apagaGasto } from '../actions';

class Table extends React.Component {
  deleteExpenses(id) {
    const { apaga } = this.props;
    apaga(id);
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
const mapStateToProps = (state) => ({
  arrayExpenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(apagaGasto(id)),
});
Table.propTypes = {
  arrayExpenses: PropTypes.arrayOf(PropTypes.Object).isRequired,
  apaga: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
