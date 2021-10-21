import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HeaderTableOfCost extends React.Component {
  render() {
    const { listOfExpenses } = this.props;
    // const { value, description, currency, method, tag, exchangeRates } = listOfExpenses;
    console.log(listOfExpenses);
    return (
      <table className="header-table-costs">
        <thead>
          <th className="th-table">Descrição</th>
          <th className="th-table">Tag</th>
          <th className="th-table">Método de pagamento</th>
          <th className="th-table">Valor</th>
          <th className="th-table">Moeda</th>
          <th className="th-table">Câmbio utilizado</th>
          <th className="th-table">Valor convertido</th>
          <th className="th-table">Moeda de conversão</th>
          <th className="th-table">Editar/Excluir</th>
        </thead>
        <tbody>
          {listOfExpenses
            .map(({ id, value, description, currency, method, tag, exchangeRates }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{exchangeRates[currency].name.split('/')[0]}</td>
                <td>
                  {(Number(value) * Number(exchangeRates[currency].ask)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  listOfExpenses: state.wallet.expenses,
});

HeaderTableOfCost.propTypes = {
  listOfExpenses: PropTypes.shape({
    id: PropTypes.number,
    method: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf,
    map: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, null)(HeaderTableOfCost);
