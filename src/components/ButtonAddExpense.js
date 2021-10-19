import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddExpense extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        className="btn-add-expense"
        type="button"
        onClick={ handleClick }
      >
        Adicionar despesa
      </button>
    );
  }
}

ButtonAddExpense.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonAddExpense;
