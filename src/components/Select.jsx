import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { dataTestId, labelTitle, arrayOption, name, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {labelTitle}
        <select
          data-testid={ dataTestId }
          onChange={ onChange }
          name={ name }
          value={ value }
          id={ name }
        >
          {arrayOption.map((option) => (
            <option key={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  arrayOption: [],
  value: undefined,
  dataTestId: undefined,
};

Select.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  arrayOption: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
};
