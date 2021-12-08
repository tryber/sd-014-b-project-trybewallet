import React from 'react';
import { connect } from 'react-redux';
import { titlesTable } from '../helper/helper';
import PropTypes from 'prop-types';
import { delExpensive, initUpdate } from '../actions';


class Table extends React.Component{

  getExchangeValue(obj) {
    return obj.exchangeRates[obj.currency].ask;
  }

  getConversion(obj) {
    const value = obj.value.replace('R$', '');
    const valueConverted = parseFloat(value) * 
    parseFloat(obj.exchangeRates[obj.currency].ask);
    return valueConverted
      .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  getEditExpense(expensive) {
    const { initUpdate, updateState } = this.props;
    initUpdate(expensive);
    updateState(expensive);
    
  }

  renderEditAndDel(expenseId, expense) {
    const { delSpent } = this.props;
    return(
      <td>
        <i 
          className="bi bi-pencil-square"
          onClick={ () => this.getEditExpense(expense) }
          title="Editar"
        />
        <i 
          className="bi bi-dash-circle"
          onClick={ () => delSpent(expenseId) }
          title="Excluir"
        />
      </td> 
    );
  }

  getFormatValue(value) {
    const valueReplaced = value.replace('R$','');
    const floatValue = parseFloat(valueReplaced);
    return floatValue
      .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  render() {
    const { expensives } = this.props;
    return(
      <table>
        <thead>
          <tr>
            {titlesTable.map((title, index )=> (
              <th key={ index }> {title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expensives.map((expensive, index) => {
            const exchangeValue = this.getExchangeValue(expensive);
            const convertedValue = this.getConversion(expensive);
            const valueFormated = this.getFormatValue(expensive.value);
            return(
              <tr key={ index }>
                <td>{ expensive.description }</td>
                <td>{ expensive.tag }</td>
                <td>{ expensive.method }</td>
                <td>{ valueFormated }</td>
                <td>{ expensive.exchangeRates[expensive.currency]
                  .name.split('/')[0] }
                </td>
                <td>{ parseFloat(exchangeValue).toFixed(2) }</td>
                <td>{ convertedValue }</td>
                <td>Real</td>
                {this.renderEditAndDel(expensive.id, expensive)}
              </tr>
            );
          }  
          )}
        </tbody>  
      </table>
    );
  }
}

Table.propTypes = {
  expensives: PropTypes.arrayOf(PropTypes.any).isRequired,
  delSpent: PropTypes.func.isRequired,
  initUpdate: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expensives: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delSpent: (value) => dispatch(delExpensive(value)),
  initUpdate: (payload) => dispatch(initUpdate(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
