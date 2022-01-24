import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { fetchCurrenciesAPI, sendWalletExpenses } from '../actions';
import fetchCoins from '../api/coins';
import Select from './Select';

// eslint-disable-next-line max-lines-per-function
function Forms() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');
  const [id, setId] = useState(0);
  const [exchangeRates, setExchangeRates] = useState(null);
  const dispatch = useDispatch();

  const currencies = useSelector((state) => state.wallet.currencies);

  const content = { value, description, currency, method, tag, id, exchangeRates };

  useEffect(() => {
    dispatch(fetchCurrenciesAPI());
    const exchange = async () => {
      const moedas = await fetchCoins();
      setExchangeRates(moedas);
    };
    exchange();
  }, []);

  async function onSubmitForm() {
    dispatch(sendWalletExpenses(content));
    setId(id + 1);
  }

  return (
    <div>
      <form>
        <TextField
          label="Valor"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
          type="number"
          id="input-expense"
          name="value"
        />
        <Select
          tag={ tag }
          method={ method }
          currency={ currency }
          coins={ currencies }
          setTag={ ({ target }) => setTag(target.value) }
          setMethod={ ({ target }) => setMethod(target.value) }
          setCurrency={ ({ target }) => setCurrency(target.value) }
        />
        <TextField
          label="Descrição"
          value={ description }
          id="input-description"
          name="description"
          type="text"
          onChange={ ({ target }) => setDescription(target.value) }
        />
      </form>
      <Button
        variant="contained"
        color="secondary"
        onClick={ onSubmitForm }
        type="button"
      >
        Adicionar despesas

      </Button>
    </div>
  );
}

export default Forms;
