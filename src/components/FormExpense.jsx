import React from 'react';
import SelectGenerator from './SelectGenerator';

const currency = ['Inicial'];
const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

function FormExpense() {
  return (
    <div>
      <form className="form-expense">
        <label className="form-label" htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            className="form-control"
          />
        </label>
        <SelectGenerator name="Moeda" option={ currency } />
        <SelectGenerator name="Método de pagamento" option={ payment } />
        <SelectGenerator name="Tag" option={ tag } />
        <label className="form-label" htmlFor="describe">
          Descrição
          <input
            type="text"
            name="describe"
            id="describe"
            className="form-control"
          />
        </label>
        <button type="button" className="btn btn-warning">Adicionar Despesa</button>
      </form>
    </div>
  );
}

export default FormExpense;
