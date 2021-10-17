import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, onChange, placeholder, type, value } = this.props;
    return (
      <label htmlFor={ name }>
        <input
          name={ name }
          onChange={ onChange }
          placeholder={ placeholder }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

/*
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};
*/

export default connect()(Input);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
