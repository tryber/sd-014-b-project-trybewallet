import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { name, label, data } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        :
        <select name={ name } id={ name }>
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
};

export default InputSelect;
