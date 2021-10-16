import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class TabelaNova extends React.Component {
  renderTabela(array) {
    return (
      <table>
        <caption>Lista de Despesas</caption>
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
          {array.map((despesa, idx) => {
            const { exchangeRates, currency } = despesa;
            return (
              <tr key={ idx }>
                <td>{despesa.description}</td>
                <td>{despesa.tag}</td>
                <td>{despesa.method}</td>
                <td>
                  {despesa.value}
                </td>
                <td>{exchangeRates[currency].name.replace('/Real Brasileiro', '')}</td>
                <td>
                  {Number(exchangeRates[currency].ask).toFixed(2)}
                </td>
                <td>
                  {Number(exchangeRates[currency].ask * despesa.value).toFixed(2)}
                </td>
                <td>Real</td>
                <td><button type="button">Editar/Excluir</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const { despesas } = this.props;
    return (
      <div>
        { !despesas ? <h3>Não há dividas listadas</h3> : this.renderTabela(despesas) }
      </div>
    );
  }
}

TabelaNova.propTypes = {
  despesas: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
});

export default connect(mapStateToProps)(TabelaNova);
