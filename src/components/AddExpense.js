import React, { useReducer } from 'react';

const INITIAL_STATE = {
  valor: '',
  descricao: '',
  moeda: 'BRL',
  ptMthd: 'Dinheiro',
  tag: 'Alimentação',
};

const reducer = (state, { field, value }) => ({ ...state, [field]: value });

export default function AddExpense() {
  const [state, setState] = useReducer(reducer, INITIAL_STATE);

  const handleChange = ({ target: { id, value } }) => {
    setState({ field: id, value });
  };

  const { valor, descricao, moeda, ptMthd, tag } = state;

  return (
    <form>
      <label htmlFor="valor">
        Valor
        <input type="number" id="valor" value={ valor } onChange={ handleChange } />
      </label>
      <label htmlFor="descricao">
        Descrição
        <textarea value={ descricao } onChange={ handleChange } id="descricao" />
      </label>
      <label htmlFor="moeda">
        Moeda
        <select id="moeda" value={ moeda } onChange={ handleChange }>
          <option value="BRL">BRL</option>
        </select>
      </label>
      <label htmlFor="ptMthd">
        Método de pagamento
        <select id="ptMthd" defaultValue={ ptMthd } onChange={ handleChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag
        <select id="tag" value={ tag } onChange={ handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    </form>
  );
}
