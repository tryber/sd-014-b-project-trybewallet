import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonForm extends Component {
  render() {
    const { componentName, onClick, value } = this.props;
    return (
      <input
        className=""
        type="button"
        id={ componentName }
        value={ value }
        onClick={ onClick }
      />
    );
  }
}

ButtonForm.propTypes = {
  componentName: PropTypes.any,
  onClick: PropTypes.any,
  value: PropTypes.any,
}.isRequired;
