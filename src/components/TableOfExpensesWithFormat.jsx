import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TableOfExpensesWithFormat extends Component {
  render() {
    const { expenses } = this.props;
    const tableHeader = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <section>
        <table>
          <thead>
            <tr>
              { tableHeader.map((header, index) => (
                <th key={ index }>{ header }</th>
              )) }
            </tr>
          </thead>
          <tbody>
            { expenses
              .map(({ id, value, description, currency, method, tag, exchangeRates }) => (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>
                    { Intl.NumberFormat('pt-BR',
                      { style: 'currency', currency })
                      .format(Number(value).toFixed(2)).replace(',', '.') }
                  </td>
                  <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                  <td>
                    { Intl.NumberFormat('pt-BR',
                      { style: 'currency', currency: 'BRL' })
                      .format(Number(exchangeRates[currency].ask).toFixed(2))
                      .replace(',', '.') }
                  </td>
                  <td>
                    { Intl.NumberFormat('pt-BR',
                      { style: 'currency', currency: 'BRL' })
                      .format(Number((value) * exchangeRates[currency].ask).toFixed(2))
                      .replace(',', '.') }
                  </td>
                  <td>{ exchangeRates[currency].name.split('/')[1] }</td>
                  <td>Botão Editar/Excluir</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    );
  }
}

TableOfExpensesWithFormat.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableOfExpensesWithFormat);
