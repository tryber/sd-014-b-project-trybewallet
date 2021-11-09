import React from 'react';
import PropTypes from 'prop-types';
import SelectLabel from './SelectLabel';
import ExpensesLabel from './ExpensesLabel';
import { inpHelper, selectHelper } from '../helper/data';

const FormHeader = (props) => {
  const { handleChange, onClick, currencies, currency } = props;
  return (
    <form>
      { inpHelper.map(({ type, id, text, name }) => (<ExpensesLabel
        type={ type }
        id={ id }
        text={ text }
        name={ name }
        onChange={ handleChange }
        value={ props[name] }
        key={ id }
      />)) }
      <SelectLabel
        html="currency"
        text="Moeda"
        value={ currency }
        onChange={ handleChange }
        name="currency"
        options={ currencies }
      />
      { selectHelper.map(({ text, id, options, name }) => (<SelectLabel
        key={ id }
        id={ id }
        name={ name }
        text={ text }
        value={ props[name] }
        onChange={ handleChange }
        options={ options }
      />)) }
      <button type="button" onClick={ onClick }>Adicionar despesa</button>
    </form>
  );
};

FormHeader.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
};

export default FormHeader;
