import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpensesToTable from './WalletFunctions';

class WalletTable extends React.Component {
  render() {
    const { expenses } = this.props;
    let addToTable = false;
    addToTable = expenses.length !== 0;
    return (
      <div>
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
            {addToTable && <ExpensesToTable expenses={ expenses } />}
          </thead>
        </table>
      </div>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape.isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletTable);
