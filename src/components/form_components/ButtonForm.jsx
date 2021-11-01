import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonForm extends Component {
  render() {
    const { componentName, onClick, value } = this.props;
    return (
      <label htmlFor={ componentName }>
        <input
          className=""
          type="button"
          name={ value }
          id={ componentName }
          value={ value }
          onClick={ onClick }
        />
      </label>
    );
  }
}

ButtonForm.propTypes = {
  componentName: PropTypes.any,
  onClick: PropTypes.any,
  value: PropTypes.any,
}.isRequired;
