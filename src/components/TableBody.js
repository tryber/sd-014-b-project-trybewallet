import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableBody extends Component {
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
              <td>Editar/Excluir</td>
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

TableBody.propTypes = {
  arrayExpenses: PropTypes.arrayOf(PropTypes.Object).isRequired,
};

export default connect(mapStateToProps)(TableBody);
