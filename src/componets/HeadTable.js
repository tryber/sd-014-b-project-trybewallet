import React from 'react';
import PropTypes from 'prop-types';

export default class HeadTable extends React.Component {
  render() {
    const { renderPurchase } = this.props;
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
          { renderPurchase }
        </thead>
      </table>
    );
  }
}

HeadTable.propTypes = {
  renderPurchase: PropTypes.func.isRequired,
};
