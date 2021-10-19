import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  render() {
    const { placeText, type, name, dataTestId, labelTitle, onChange, value } = this.props;
    return (
      <label htmlFor={ name }>
        {labelTitle}
        <input
          onChange={ onChange }
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          id={ name }
          value={ value }
          placeholder={ placeText }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  onChange: undefined,
  dataTestId: undefined,
  value: undefined,
  placeText: undefined,
  labelTitle: undefined,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  labelTitle: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeText: PropTypes.string,
};
