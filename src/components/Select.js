import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      label,
      name,
      onChange,
      options,
      value,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <select
          name={ name }
          onChange={ onChange }
          value={ value }
        >
          {
            options.map((option, index) => (
              <option key={ index }>{ option }</option>
            ))
          }
        </select>
      </label>
    );
  }
}

export default connect()(Select);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {

};
