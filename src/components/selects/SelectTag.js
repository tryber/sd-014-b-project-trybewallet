import PropTypes from 'prop-types';
import React from 'react';

class SelectTag extends React.Component {
  render() {
    const { value, onChange, name } = this.props;
    return (
      <div>
        <label htmlFor="tag">
          Tag
          <select id="tag" name={ name } value={ value } onChange={ onChange }>
            <option value="meal">Alimentação</option>
            <option value="hobbie">lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectTag.propTypes = {
  name: PropTypes.isRequired,
  onChange: PropTypes.isRequired,
  value: PropTypes.isRequired,
};

export default SelectTag;
