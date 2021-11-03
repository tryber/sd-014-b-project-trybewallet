import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CABECALHO from './cabeçalho';

class TableCost extends Component {
  constructor() {
    super();
    this.coin = this.coin.bind(this);
    this.valueConverted = this.valueConverted.bind(this);
  }

  // ajuda do code review do Bruno Landim
  coin(coin, nameCoin) {
    if (coin === 'BRL') {
      return 'Real Brasileiro';
    }
    const coinName = nameCoin[coin].name;
    const moed = coinName.split('/');
    return moed[0];
  }

  valueConverted(exchR, currency) {
    const valueConv = Object.values(exchR).filter(({ code, codein }) => (
      code === currency && codein !== 'BRLT'
    )).map(({ ask }) => ask).toString();
    return valueConv;
  }

  render() {
    const { costInfo } = this.props;
    return (
      <table>
        <CABECALHO />
        {costInfo.map(
          (
            (
              { description, value, currency, method, tag, exchangeRates }, ind,
            ) => (
              <tr key={ ind }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{this.coin(currency, exchangeRates)}</td>
                <td>
                  {
                    parseFloat(this.valueConverted(exchangeRates, currency)).toFixed(2)
                  }
                </td>
                <td>
                  {
                    parseFloat(
                      Math.fround(value * this.valueConverted(exchangeRates, currency)),
                    ).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <section>
                    <button className="btn btn-warning m-1" type="button">
                      <i className="bi bi-pencil-square">Editar</i>
                    </button>
                    <button className="btn btn-danger m-1" type="button">
                      <i className="bi bi-trash">Excluir</i>
                    </button>
                  </section>
                </td>
              </tr>
            )),
        )}
      </table>
    );
  }
}

TableCost.propTypes = {
  costInfo: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  costInfo: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(TableCost);
