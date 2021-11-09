import React from 'react';
import PropTypes from 'prop-types';

class DescriptionLabel extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <label htmlFor="description-form-label">
        Descrição
        <input
          type="text"
          name="description"
          id="description-form-label"
          onChange={ onChange }
          value={ value }
        />
      </label>
    );
  }
}

DescriptionLabel.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default DescriptionLabel;
