import React from 'react';
import PropTypes from 'prop-types';
import '../css/loginPageCss.css';

export default class Button extends React.Component {
  render() {
    const { text, onClick, dataTestId } = this.props;
    return (
      <button className="button-active" data-testid={ dataTestId } onClick={ onClick } type="button">{text}</button>
    );
  }
}

Button.defaultProps = {
  dataTestId: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  dataTestId: PropTypes.string,
};
