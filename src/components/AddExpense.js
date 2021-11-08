import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import InputValue from './formComponents/InputValue';
import InputDescription from './formComponents/InputDescription';
import SelectCoin from './formComponents/SelectCoin';
import SelectTag from './formComponents/SelectTag';
import SelectPayment from './formComponents/SelectPayment';
import { createExpense } from '../actions';
import useFetch from '../hooks/useFetch';

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
      <InputValue />
      <InputDescription />
      <SelectCoin data={ data } />
      <SelectPayment />
      <SelectTag />
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
