import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AddExpenseBtn extends Component {
  render() {
    const { click } = this.props;
    return (
      <button
        type="button"
        onClick={ click }
      >
        <i> Adicionar despesa</i>
      </button>
    );
  }
}

AddExpenseBtn.propTypes = {
  click: PropTypes.func.isRequired,
};

export default AddExpenseBtn;
