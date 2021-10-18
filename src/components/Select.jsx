import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, array } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <select name={ name } id={ name }>
          {array
            .map((item, index) => <option key={ index } value={ item }>{ item }</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  array: PropTypes.arrayOf().isRequired,
};

export default Select;
