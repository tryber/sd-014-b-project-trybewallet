import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableCosts extends React.Component {
  render() {
    const { listOfExpenses } = this.props;
    console.log(listOfExpenses);
    const numberToSub = -16;
    return (
      <div>
        {listOfExpenses.map((obj, index) => (
          <tr key="itens-expense">
            <td key={ index }>{obj.description}</td>
            <td key={ index }>{obj.tag}</td>
            <td key={ index }>{obj.method}</td>
            <td key={ index }>{obj.value}</td>
            <td key={ index }>{obj.currency}</td>
            <td>{obj.exchangeRates[obj.currency].name.slice(0, numberToSub)}</td>
            <td>{ (obj.exchangeRates[obj.currency].ask) * obj.value }</td>
            <td>Real</td>
            <td>Editar/Excluir</td>
          </tr>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfExpenses: state.wallet.expenses,
});

TableCosts.propTypes = {
  listOfExpenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(TableCosts);
