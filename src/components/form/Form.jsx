import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

export default function Form(props) {
  const {
    formState: { value, description, currency, method, tag, currencies },
    handleChange,
    children: button,
  } = props;
  return (
    <form>
      <Input
        label="Valor"
        type="number"
        id="value"
        value={ value }
        handleChange={ handleChange }
      />
      <Input
        label="Descrição"
        id="description"
        value={ description }
        handleChange={ handleChange }
      />
      <Select
        label="Moeda"
        id="currency"
        options={ currencies }
        value={ currency }
        handleChange={ handleChange }
      />
      <Select
        label="Método de pagamento"
        id="method"
        options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        value={ method }
        handleChange={ handleChange }
      />
      <Select
        label="Tag"
        id="tag"
        options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        value={ tag }
        handleChange={ handleChange }
      />
      { button }
    </form>
  );
}

Form.propTypes = {
  formState: PropTypes.objectOf(PropTypes.any),
}.isRequired;
