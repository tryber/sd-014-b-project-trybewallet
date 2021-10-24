import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expenses extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button onClick={ handleClick } type="button">
        Adicionar despesa
      </button>
    );
  }
}

Expenses.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Expenses;
