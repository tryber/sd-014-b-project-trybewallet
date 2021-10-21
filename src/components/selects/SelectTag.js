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
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
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
