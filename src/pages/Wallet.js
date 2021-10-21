import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
import Button from '../components/Button';

const CHARACTHER_TABLE = [
  'Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda', 'Câmbio utilizado',
  'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
];

class Wallet extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <Header />
        <FormExpense />
        {/* tabela */}
        <table>
          <thead>
            <tr>
              { CHARACTHER_TABLE.map((item) => (
                <th key={ item }>{ item }</th>)) }
            </tr>
          </thead>
          <tbody>
            { expenses && expenses.map(
              ({ id, description, tag, method, value, currency, exchangeRates }) => (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ (exchangeRates[currency].name).split('/')[0] }</td>
                  <td>{ (Number(exchangeRates[currency].ask)).toFixed(2) }</td>
                  <td>
                    { (value * exchangeRates[currency].ask).toFixed(2)}
                  </td>
                  <td>Real</td>
                  <td>
                    <Button
                      label="Delete"
                      type="button"
                      data-testid="delete-btn"
                      name="delete-btn"
                    />
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

Wallet.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
