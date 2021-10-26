import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense as removeExpenseAction } from '../actions';

class Table extends React.Component {
  header() {
    return (
      <>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </>
    );
  }

  render() {
    const { gastos, removeExpense, editing } = this.props;
    return (
      <table>
        <thead>
          <tr>
            { this.header() }
          </tr>
        </thead>
        { gastos && gastos.map((item) => {
          const { currency, id, description, tag, method, value, exchangeRates } = item;
          const currencyName = exchangeRates[currency].name.split('/')[0];
          const currencyValue = exchangeRates[currency].ask;
          const convert = currencyValue * value;
          return (
            <tbody key={ id }>
              <tr id={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ currencyName }</td>
                <td>{ Number(currencyValue).toFixed(2) }</td>
                <td>{ convert.toFixed(2) }</td>
                <td>Real</td>
                <td>{ currency }</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => removeExpense({ id }) }
                  >
                    X
                  </button>
                  <button
                    data-testid="edit-btn"
                    type="button"
                    onClick={ () => editing(item) }
                  >
                    E
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  }
}

Table.propTypes = {
  editing: PropTypes.func.isRequired,
  gastos: PropTypes.arrayOf(PropTypes.any).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gastos: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (e) => dispatch(removeExpenseAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
