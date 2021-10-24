import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const { method, tag, func } = this.props;
    return (
      <div>
        <label htmlFor="method">
          Método de Pagamento
          <select id="method" value={ method } onChange={ func }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ func }>
            <option value="Alimentacao">Alimentação</option>
            <option value="Lazer" selected>Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

InputForm.propTypes = {
  pagamento: PropTypes.string,
  despesa: PropTypes.string,
  func: PropTypes.func,
}.isRequired;

export default InputForm;
