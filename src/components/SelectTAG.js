import PropTypes from 'prop-types';
import React from 'react';

export default class SelectTAG extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="tag">
        Tag:
        <select id="tag" name="tag" value={ value } onChange={ handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTAG.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
