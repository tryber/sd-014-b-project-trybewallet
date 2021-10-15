import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import '../css/buttonsCss.css';

export default class ButtonDelete extends React.Component {
  render() {
    const { onClick, dataTestId } = this.props;
    return (
      <button
        className="btn-delete"
        data-testid={ dataTestId }
        onClick={ onClick }
        type="button"
      >
        <MdDeleteForever size="2.5em" color="rgba(78, 52, 160, 0.86)" />
      </button>
    );
  }
}

ButtonDelete.defaultProps = {
  dataTestId: '',
};

ButtonDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
};
