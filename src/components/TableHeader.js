import React from 'react';
import { connect } from 'react-redux';

class TableHeader extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="0" id="description">Descrição</th>
        <th colSpan="1" id="tag">Tag</th>
        <th colSpan="2" id="method">Método de pagamento</th>
        <th colSpan="3" id="value">Valor</th>
        <th colSpan="4" id="currency">Moeda</th>
        <th colSpan="5" id="rate">Câmbio utilizado</th>
        <th colSpan="6" id="conversion">Valor convertido</th>
        <th colSpan="7" id="home-currency">Moeda de conversão</th>
        <th colSpan="8" id="button">Editar/Excluir</th>
      </tr>
    );
  }
}

export default connect()(TableHeader);

TableHeader.propTypes = {

};

TableHeader.defaultProps = {

};
