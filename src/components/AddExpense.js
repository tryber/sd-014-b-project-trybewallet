import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import Input from './forms/Input';
import Inputdesc from './forms/Inputdesc';
import Selecmoeda from './forms/Selecmoeda';
import Selectag from './forms/Selectag';
import Selecpay from './forms/Selecpay';
import { createExpense } from '../actions';
import useFetch from './useFetch';

const AddExpense = ({
  value,
  description,
  coin,
  payment,
  tag,
  expenses,
}) => {
  const dispatch = useDispatch();
  const { request, data } = useFetch();

  useEffect(() => {
    request('https://economia.awesomeapi.com.br/json/all');
  }, [request]);

  const handleSubmit = (e) => {
    e.preventDefault();
    request('https://economia.awesomeapi.com.br/json/all');
    const expense = {
      id: expenses.length,
      value,
      description,
      currency: coin,
      method: payment,
      tag,
      exchangeRates: data,
    };
    dispatch(createExpense(expense));
  };

  return (
    <form onSubmit={ (e) => handleSubmit(e) }>
      <Input />
      <Inputdesc />
      <Selecmoeda data={ data } />
      <Selecpay />
      <Selectag />
      <button type="submit">
        Adicionar despesa
      </button>
    </form>
  );
};

AddExpense.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  coin: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  value: state.form.value,
  description: state.form.description,
  coin: state.form.coin,
  payment: state.form.payment,
  tag: state.form.tag,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(AddExpense);
