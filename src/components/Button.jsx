import PropTypes from 'prop-types';
import React from 'react';

export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={ onClick }
      className="btn btn-success"
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
