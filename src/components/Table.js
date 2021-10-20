import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { itemsTable } = this.props;
    return (
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
        <tbody>
          {itemsTable
            .map(({ id, exchangeRates, description, tag, method, value, currency }) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(value) * Number(exchangeRates[currency].ask))
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button data-testid="edit-btn" type="button">EDIT</button>
                  <button data-testid="delete-btn" type="button">delete</button>
                </td>
              </tr>
            ))}
        </tbody>

      </table>
    );
  }
}

Table.propTypes = {
  itemsTable: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRate: PropTypes.objectOf(PropTypes.object),
  })).isRequired,
};

const mapStateToProps = (state) => ({
  itemsTable: state.wallet.expenses,
});

// const mapDispatchToProps = {

// };

export default connect(mapStateToProps, null)(Table);
