import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ButtonDefault extends Component {
  render() {
    const { click } = this.props;
    return (
      <button
        type="button"
        onClick={ click }
        className="btn btn-secondary m-1"
      >
        <i className="bi bi-plus-circle"> Adicionar despesa</i>
      </button>
    );
  }
}

ButtonDefault.propTypes = {
  click: PropTypes.func.isRequired,
};

export default ButtonDefault;
