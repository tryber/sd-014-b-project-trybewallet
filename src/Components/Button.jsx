import PropTypes from 'prop-types';
import React from 'react';

function Input({ textButton, onClick, className, disabled }) {
  return (
    <section className="container-button">
      <button
        type="button"
        onClick={ onClick }
        className={ className }
        disabled={ disabled }
      >
        { textButton }
      </button>
    </section>
  );
}

Input.propTypes = {
  textButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  disabled: null,
};

export default Input;
