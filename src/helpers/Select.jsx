import PropTypes from 'prop-types';
import React, { Component } from 'react';
import firstLetterUpperCase from './helperFunctions';

class Select extends Component {
  render() {
    const { selectItems, name, handleChange } = this.props;
    const nameUpperCase = firstLetterUpperCase(name);
    return (
      <label htmlFor={ name }>
        {`${nameUpperCase.replace(/_/g, ' ')}: `}
        <select id={ name } onChange={ handleChange }>
          {selectItems.map((item, index) => <option key={ index }>{item}</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  selectItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
