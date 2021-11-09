import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectLabel extends Component {
  render() {
    const { html, text, option } = this.props;
    return (
      <label htmlFor={ html }>
        {text}
        <select id={ html }>
          {
            option.map(({ value, content }) => (
              <option
                value={ value }
                key={ value }
              >
                {content}
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

SelectLabel.propTypes = {
  html: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
};

export default SelectLabel;
