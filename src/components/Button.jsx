import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={ onClick }
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
