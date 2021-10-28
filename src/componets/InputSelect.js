import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { name, label, data, value, handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        :
        <select name={ name } id={ name } onChange={ handleChange } value={ value }>
          { data.map((item) => (<option key={ item } value={ item }>{ item }</option>)) }
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputSelect;
