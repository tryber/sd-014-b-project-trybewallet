import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { label, id, value, onChange, name } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <textarea
          value={ value }
          id={ id }
          onChange={ onChange }
          name={ name }
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

TextArea.defaultProps = {
  name: '',
  label: '',
  value: '',
  id: '',
  onChange: null,
};

export default TextArea;
