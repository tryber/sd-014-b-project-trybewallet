import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { id, label, onClick } = this.props;
    return (
      <button
        data-testid={ id }
        type="button"
        onClick={ onClick }
      >
        { label }
      </button>
    );
  }
}

export default connect()(Button);

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  expenseId: undefined,
  id: '',
  onClick: () => null,
};
