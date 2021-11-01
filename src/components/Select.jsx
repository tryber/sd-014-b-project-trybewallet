import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, values, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        Método de Pagamento
        <select name={ name } id={ name } onChange={ onChange }>
          {values
            .map((eachValue, i) => (
              <option
                key={ i }
                value={ eachValue }
              >
                { eachValue }
              </option>))}
        </select>
      </label>
    );
  }
}

/* /* <option>Dinheiro</option>
<option>Cartão de Crédito</option>
<option>Cartão de débito</option> */
Select.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.string.isRequired,
};

export default Select;
