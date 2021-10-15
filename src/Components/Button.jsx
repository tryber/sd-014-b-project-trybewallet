import PropTypes from 'prop-types';
import React from 'react';

function Input({ textButton, onClick, className }) {
  return (
    <section className="container-button">
      <button
        type="button"
        onClick={ onClick }
        className={ className }
      >
        { textButton }
      </button>
    </section>
  );
}

Input.propTypes = {
  textButton: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Input;
