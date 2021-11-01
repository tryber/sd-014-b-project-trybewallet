import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import fetchCurrency from '../service';
import PaymentMethodLabel from './PaymentMethodLabel';
import TagLabel from './TagLabel';
import * as ActionsCreators from '../actions/index';
import DescriptionLabel from './DescriptionLabel';
import ValueLabel from './ValueLabel';
import CurrencyLabel from './CurrencyLabel';

function ExpenseForm({ setExpenseGlobal }) {
  const [id, setId] = useState(0);
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('');
  const [method, setMethod] = useState('');
  const [tag, setTag] = useState('');

  const handleClick = async () => {
    const exchangeRates = await fetchCurrency();
    delete exchangeRates.USDT;
    setExpenseGlobal({ id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates });
    setId(id + 1);
  };

  return (
    <form>
      <ValueLabel value={ value } setValue={ setValue } />
      <CurrencyLabel currency={ currency } setCurrency={ setCurrency } />
      <DescriptionLabel description={ description } setDescription={ setDescription } />
      <PaymentMethodLabel method={ method } setMethod={ setMethod } />
      <TagLabel tag={ tag } setTag={ setTag } />
      <button type="button" onClick={ handleClick }>
        Adicionar despesa
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionsCreators, dispatch);

ExpenseForm.propTypes = {
  setExpenseGlobal: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ExpenseForm);
