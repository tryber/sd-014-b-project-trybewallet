import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, title, options } = this.props;
    return (
      <label htmlFor={ name }>
        {' '}
        { title }
        <select id={ name }>
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
};

Select.defaultProps = {
  options: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
};

export default Select;
