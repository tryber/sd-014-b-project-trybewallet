import PropTypes from 'prop-types';
import React from 'react';
import InputGroup from './InputGroup';

export default class Input extends React.Component {
  render() {
    const { type, id, label, inline, ...attributes } = this.props;
    const inputElement = (
      <input type={ type } id={ id } className="Input" { ...attributes } />
    );
    const labelElement = (
      <label htmlFor={ id }>{ label }</label>
    );
    const checkboxOrRadio = type === 'checkbox' || type === 'radio';

    return (
      <InputGroup inline={ inline }>
        { checkboxOrRadio ? inputElement : labelElement }
        { checkboxOrRadio ? labelElement : inputElement }
      </InputGroup>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  inline: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  inline: false,
};
