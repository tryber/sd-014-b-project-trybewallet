import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ onClick }) {
  return (
    <button
      type="button"
      onClick={ onClick }
      className="btn btn-success"
    >
      Adicionar despesa
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
