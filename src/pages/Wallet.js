import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../actions/index';
import AddExpense from '../components/AddExpense';
import Header from '../components/Header';

export default function Wallet() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.wallet.isFetching);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {isFetching ? <h3>Loading...</h3> : <AddExpense />}
    </div>
  );
}
