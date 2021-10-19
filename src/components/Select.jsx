import PropTypes from 'prop-types';
import React from 'react';

class Select extends React.Component {
  render() {
    const { array, value, label, id, onChange, name } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select id={ id } value={ value } onChange={ onChange } name={ name }>
          { array.map((element) => (
            <option
              key={ element }
              value={ element }
            >
              { element }
            </option>))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  array: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

Select.defaultProps = {
  name: '',
  label: '',
  value: '',
  id: '',
};

export default Select;
