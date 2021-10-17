import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
      >
        { label }
      </button>
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

export default connect()(Button);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => null,
};
