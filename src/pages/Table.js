import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
  handleChange() {
    const { expense } = this.props;
    return expense.map((curr, keys) => (
      <tr key={ keys }>
        <td>{curr.description}</td>
        <td>{curr.tag}</td>
        <td>{curr.method}</td>
        <td>{curr.value}</td>
        <td>{curr.currency}</td>
        <td>{curr.exchangeRates[curr.currency].name.split('/')[0]}</td>
        <td>{Number(curr.exchangeRates[curr.currency].ask).toFixed(2)}</td>
        <td>{Number(curr.value * curr.exchangeRates[curr.currency].ask).toFixed(2)}</td>
        <td>BRL</td>
        <td>Real</td>

      </tr>
    ), []);
  }

  render() {
    const tableHead = ['Descrição', 'Tag', 'Método de pagamento',
      'Valor', 'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

    return (
      <table>
        <thead>
          <tr>
            {tableHead.map((acc) => <th key={ acc }>{acc}</th>)}
          </tr>
        </thead>
        <tbody>
          {this.handleChange()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expense: state.wallet.expenses,
  exchange: state.wallet.currencies,
});

Table.propTypes = {
  expense: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Table);
