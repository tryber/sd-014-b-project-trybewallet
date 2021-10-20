import PropTypes from 'prop-types';
import React from 'react';

class TagOptions extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          value={ value }
          onChange={ handleChange }
        >
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

TagOptions.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
}.isRequired;

export default TagOptions;
