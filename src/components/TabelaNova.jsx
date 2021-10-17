import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { inputDespesa, valorConvertidoDespesa, removeValor } from '../actions/index';

class TabelaNova extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, valor) {
    const { despesa, despesas, removeValorLista } = this.props;
    const newDespesas = despesas.filter((elemento) => elemento !== id);
    removeValorLista(valor);
    despesa(newDespesas);
  }

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
              <tr key={ despesa.id }>
                <td>{despesa.description}</td>
                <td>{despesa.tag}</td>
                <td>{despesa.method}</td>
                <td>{despesa.value}</td>
                <td>{exchangeRates[currency].name.replace('/Real Brasileiro', '')}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{Number(exchangeRates[currency].ask * despesa.value).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    value={ idx }
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this
                      .handleClick(despesa, Number(exchangeRates[currency]
                        .ask * despesa.value).toFixed(2)) }
                  >
                    Excluir
                  </button>

                </td>
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
  despesa: PropTypes.func.isRequired,
  removeValorLista: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,
  soma: state.soma.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  despesa: (e) => dispatch(inputDespesa(e)),
  valorConvertido: (e) => dispatch(valorConvertidoDespesa(e)),
  removeValorLista: (e) => dispatch(removeValor(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabelaNova);
