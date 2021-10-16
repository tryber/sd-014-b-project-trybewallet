import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';
import Select from './Select';
import Button from './Button';

const payments = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const categoriesList = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

function Form({
  currencies, onChange, value, description, currency, method, tag, onClick }) {
  return (
    <form className="form">
      <Input
        textLabel="Valor: "
        type="number"
        nameText="value"
        id="value"
        value={ value }
        onChange={ onChange }
      />
      <Input
        textLabel="Descrição: "
        type="text"
        nameText="description"
        id="description"
        value={ description }
        onChange={ onChange }
      />
      <Select
        textLabel="Moeda: "
        id="currency"
        value={ currency }
        options={ currencies }
        onChange={ onChange }
      />
      <Select
        textLabel="Método de pagamento: "
        id="method"
        value={ method }
        options={ payments }
        onChange={ onChange }
      />
      <Select
        textLabel="Tag: "
        id="tag"
        value={ tag }
        onChange={ onChange }
        options={ categoriesList }
      />
      <Button
        className="btn-add-expenses"
        textButton="Adicionar despesas"
        onClick={ onClick }
      />
    </form>
  );
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

Form.defaultProps = {
  currencies: [],
};

export default Form;
