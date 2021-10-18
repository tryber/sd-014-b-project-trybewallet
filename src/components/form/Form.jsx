import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

export default function Form(props) {
  const {
    formState: { amountExpenses, description, currency, paymentMethod, tag },
    handleChange,
  } = props;
  return (
    <form>
      <Input
        label="Valor"
        type="number"
        id="amountExpenses"
        value={ amountExpenses }
        handleChange={ handleChange }
      />
      <Input label="Descrição" id="description" value={ description } />
      <Select
        label="Moeda"
        id="currency"
        options={ ['vazio'] }
        value={ currency }
        handleChange={ handleChange }
      />
      <Select
        label="Método de pagamento"
        id="payment-method"
        options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
        value={ paymentMethod }
        handleChange={ handleChange }
      />
      <Select
        label="Tag"
        id="tag"
        options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
        value={ tag }
        handleChange={ handleChange }
      />
    </form>
  );
}

Form.propTypes = {
  formState: PropTypes.objectOf(PropTypes.String),
}.isRequired;
