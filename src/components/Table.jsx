import React from 'react';
import { connect } from 'react-redux';
import { removeExpense as removeExpenseAction } from '../actions';

class Table extends React.Component {
  render() {
    const { gastos, removeExpense, editing } = this.props;
    return(
      <table>
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
        <tbody>{ gastos && gastos.length && gastos.map((item) => {
              const currency = item.currency;
              const currencyName = item.exchangeRates[currency].name.split('/')[0];
              const currencyValue = item.exchangeRates[currency].ask;
              const convert = currencyValue * item.value;
              return (
              <tr key={item.id} id={item.id}>
                <td>{ item.description }</td>
                <td>{ item.tag }</td>
                <td>{ item.method }</td>
                <td>{ item.value }</td>
                <td>{ currencyName }</td>
                <td>{ Number(currencyValue).toFixed(2) }</td>
                <td>{ convert.toFixed(2) }</td>
                <td>{ 'Real' }</td>
                <td>{ item.currency }</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => removeExpense({ id:item.id })}
                  >
                    X
                  </button>
                  <button
                    data-testid="edit-btn"
                    type="button"
                    onClick={ () => editing(item)}
                  >
                    E
                  </button>
                </td>
              </tr>
              )
            })}</tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  gastos: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (e) => dispatch(removeExpenseAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
