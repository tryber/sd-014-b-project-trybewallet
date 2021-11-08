import React from 'react';
import PropTypes from 'prop-types';

class Tags extends React.Component {
  render() {
    const { handle, tag } = this.props;
    return (
      <label htmlFor="tag">
        tag:
        <select id="tag" value={ tag } onChange={ handle }>
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

Tags.propTypes = {
  handle: PropTypes.func.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Tags;
