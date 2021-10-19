import React from 'react';
import PropTypes from 'prop-types';
import { BiEdit } from 'react-icons/bi';
import '../css/buttonsCss.css';

export default class ButtonEdit extends React.Component {
  render() {
    const { onClick, dataTestId } = this.props;
    return (
      <button
        className="btn-edit"
        data-testid={ dataTestId }
        onClick={ onClick }
        type="button"
      >
        <BiEdit size="2.5em" color="rgba(190, 41, 41, 0.86)" />
      </button>
    );
  }
}

ButtonEdit.defaultProps = {
  dataTestId: '',
};

ButtonEdit.propTypes = {
  onClick: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
};
