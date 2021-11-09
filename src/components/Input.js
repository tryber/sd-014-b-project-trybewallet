import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <label htmlFor="Descrição">
        Descrição
        <input
          type="text"
          id="Descrição"
          name="description"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Input;
