import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, title, options, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        {' '}
        { title }
        <select id={ name } name={ name } onChange={ onChange }>
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
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  options: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
};

export default Select;
