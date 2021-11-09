import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const { createObjectOfExpenses, editBtn,
      typeOfCoins, handlechange, handleclick, handleSendEdit } = this.props;
    return (
      <>
        <label htmlFor="currency">
          moeda
          <select onChange={ handlechange } id="currency">
            {typeOfCoins.map((string, index) => (
              <option value={ string } key={ index }>{string}</option>))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select onChange={ handlechange } id="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select onChange={ handlechange } id="tag">
            <option value="Transporte">Transporte</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        {!editBtn && (
          <button
            onClick={ () => handleclick(createObjectOfExpenses) }
            type="button"
          >
            Adicionar despesa
          </button>)}
        {editBtn && (
          <button
            onClick={ handleSendEdit }
            type="button"
          >
            Editar despesa
          </button>)}
      </>
    );
  }
}

InputForm.propTypes = {
  createObjectOfExpenses: PropTypes.func.isRequired,
  typeOfCoins: PropTypes.arrayOf(PropTypes.any),
  handlechange: PropTypes.func.isRequired,
  handleclick: PropTypes.func.isRequired,
  editBtn: PropTypes.bool.isRequired,
  handleSendEdit: PropTypes.func.isRequired,
};

InputForm.defaultProps = {
  typeOfCoins: [],
};

export default InputForm;
