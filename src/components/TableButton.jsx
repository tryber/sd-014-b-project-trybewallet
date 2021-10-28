import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TableButton extends Component {
  render() {
    const { click } = this.props;
    return (
      <>
        <button
          className="btn btn-danger m-1"
          type="button"
          onClick={ click }
          data-testid="delete-btn"
        >
          <i className="bi bi-trash">Excluir</i>
        </button>
        <button className="btn btn-warning m-1" type="button">
          <i className="bi bi-pencil-square">Editar</i>
        </button>
      </>
    );
  }
}

TableButton.propTypes = {
  click: PropTypes.func.isRequired,
};

export default TableButton;
