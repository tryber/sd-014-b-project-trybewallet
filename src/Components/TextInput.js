import PropTypes from 'prop-types';
import React from 'react';

class Inp extends React.Component {
  render() {
    const { id, label, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input id={ id } type="text" value={ value } onChange={ onChange } />
      </label>);
  }
}

Inp.propTypes = {
  onChange: PropTypes.isRequired,
  id: PropTypes.isRequired,
  label: PropTypes.isRequired,
  value: PropTypes.isRequired,
};

export default Inp;
