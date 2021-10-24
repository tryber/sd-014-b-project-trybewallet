import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { labelText, name, id, options } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select id={ id } name={ name }>
          { options.map(
            (option, index) => (
              <option key={ index }>
                {' '}
                {option}
                {' '}
              </option>),
          )}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  options: [''],
};

export default Select;
