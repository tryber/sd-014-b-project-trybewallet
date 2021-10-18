import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableRows extends React.Component {
  render() {
    const { expense: { currency, description, method, tag, value } } = this.props;
    return (
      <tr>
        <td header="description">{ description }</td>
        <td header="tag">{ tag }</td>
        <td header="method">{ method }</td>
        <td header="value">{ value }</td>
        <td header="currency">{ currency }</td>
        <td header="rate">Câmbio utilizado</td>
        <td header="conversion">Valor convertido</td>
        <td header="home-currency">Real</td>
        <td header="edit">Editar/Excluir</td>
      </tr>
    );
  }
}

export default connect()(TableRows);

TableRows.propTypes = {
  expense: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TableRows.defaultProps = {

};
